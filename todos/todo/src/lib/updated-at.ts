import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';
import { InvalidUpdatedAt } from './invalid-updated-at';

export type UpdatedAt = O.Option<Date>;

export const create = () => O.none;

export const change =
  (
    data: Readonly<{
      updatedAt: Date;
    }>
  ) =>
  (current: {
    updatedAt: UpdatedAt;
    createdAt: Date;
  }): E.Either<InvalidUpdatedAt, UpdatedAt> => {
    return pipe(
      data.updatedAt,
      E.fromPredicate(
        (updatedAt) => current.createdAt < updatedAt,
        () => new InvalidUpdatedAt()
      ),
      E.chain(
        E.fromPredicate(
          (updatedAt) =>
            pipe(
              current.updatedAt,
              O.match(
                () => true,
                (currentUpdatedAt) => currentUpdatedAt < updatedAt
              )
            ),
          () => new InvalidUpdatedAt()
        )
      ),
      E.map(O.some)
    );
  };
