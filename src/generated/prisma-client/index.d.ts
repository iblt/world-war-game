
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model GameCity
 * 
 */
export type GameCity = $Result.DefaultSelection<Prisma.$GameCityPayload>
/**
 * Model GameCountry
 * 
 */
export type GameCountry = $Result.DefaultSelection<Prisma.$GameCountryPayload>
/**
 * Model Sanctions
 * 
 */
export type Sanctions = $Result.DefaultSelection<Prisma.$SanctionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameCity`: Exposes CRUD operations for the **GameCity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameCities
    * const gameCities = await prisma.gameCity.findMany()
    * ```
    */
  get gameCity(): Prisma.GameCityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameCountry`: Exposes CRUD operations for the **GameCountry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameCountries
    * const gameCountries = await prisma.gameCountry.findMany()
    * ```
    */
  get gameCountry(): Prisma.GameCountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanctions`: Exposes CRUD operations for the **Sanctions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sanctions
    * const sanctions = await prisma.sanctions.findMany()
    * ```
    */
  get sanctions(): Prisma.SanctionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Game: 'Game',
    Team: 'Team',
    Country: 'Country',
    City: 'City',
    GameCity: 'GameCity',
    GameCountry: 'GameCountry',
    Sanctions: 'Sanctions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "game" | "team" | "country" | "city" | "gameCity" | "gameCountry" | "sanctions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      GameCity: {
        payload: Prisma.$GameCityPayload<ExtArgs>
        fields: Prisma.GameCityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameCityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameCityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>
          }
          findFirst: {
            args: Prisma.GameCityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameCityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>
          }
          findMany: {
            args: Prisma.GameCityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>[]
          }
          create: {
            args: Prisma.GameCityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>
          }
          createMany: {
            args: Prisma.GameCityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>[]
          }
          delete: {
            args: Prisma.GameCityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>
          }
          update: {
            args: Prisma.GameCityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>
          }
          deleteMany: {
            args: Prisma.GameCityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameCityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameCityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>[]
          }
          upsert: {
            args: Prisma.GameCityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCityPayload>
          }
          aggregate: {
            args: Prisma.GameCityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameCity>
          }
          groupBy: {
            args: Prisma.GameCityGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameCityGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCityCountArgs<ExtArgs>
            result: $Utils.Optional<GameCityCountAggregateOutputType> | number
          }
        }
      }
      GameCountry: {
        payload: Prisma.$GameCountryPayload<ExtArgs>
        fields: Prisma.GameCountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameCountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameCountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>
          }
          findFirst: {
            args: Prisma.GameCountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameCountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>
          }
          findMany: {
            args: Prisma.GameCountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>[]
          }
          create: {
            args: Prisma.GameCountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>
          }
          createMany: {
            args: Prisma.GameCountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>[]
          }
          delete: {
            args: Prisma.GameCountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>
          }
          update: {
            args: Prisma.GameCountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>
          }
          deleteMany: {
            args: Prisma.GameCountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameCountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameCountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>[]
          }
          upsert: {
            args: Prisma.GameCountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameCountryPayload>
          }
          aggregate: {
            args: Prisma.GameCountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameCountry>
          }
          groupBy: {
            args: Prisma.GameCountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameCountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountryCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountryCountAggregateOutputType> | number
          }
        }
      }
      Sanctions: {
        payload: Prisma.$SanctionsPayload<ExtArgs>
        fields: Prisma.SanctionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanctionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanctionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>
          }
          findFirst: {
            args: Prisma.SanctionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanctionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>
          }
          findMany: {
            args: Prisma.SanctionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>[]
          }
          create: {
            args: Prisma.SanctionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>
          }
          createMany: {
            args: Prisma.SanctionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SanctionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>[]
          }
          delete: {
            args: Prisma.SanctionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>
          }
          update: {
            args: Prisma.SanctionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>
          }
          deleteMany: {
            args: Prisma.SanctionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanctionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SanctionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>[]
          }
          upsert: {
            args: Prisma.SanctionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionsPayload>
          }
          aggregate: {
            args: Prisma.SanctionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanctions>
          }
          groupBy: {
            args: Prisma.SanctionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanctionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanctionsCountArgs<ExtArgs>
            result: $Utils.Optional<SanctionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    game?: GameOmit
    team?: TeamOmit
    country?: CountryOmit
    city?: CityOmit
    gameCity?: GameCityOmit
    gameCountry?: GameCountryOmit
    sanctions?: SanctionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    GamesCreated: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GamesCreated?: boolean | UserCountOutputTypeCountGamesCreatedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    players: number
    GameCity: number
    GameCountry: number
    Team: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | GameCountOutputTypeCountPlayersArgs
    GameCity?: boolean | GameCountOutputTypeCountGameCityArgs
    GameCountry?: boolean | GameCountOutputTypeCountGameCountryArgs
    Team?: boolean | GameCountOutputTypeCountTeamArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameCityWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameCountryWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    Sanctions: number
    IncomingSanctions: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sanctions?: boolean | TeamCountOutputTypeCountSanctionsArgs
    IncomingSanctions?: boolean | TeamCountOutputTypeCountIncomingSanctionsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSanctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanctionsWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountIncomingSanctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanctionsWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    City: number
    GameCountry: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    City?: boolean | CountryCountOutputTypeCountCityArgs
    GameCountry?: boolean | CountryCountOutputTypeCountGameCountryArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountGameCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameCountryWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    GameCity: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameCity?: boolean | CityCountOutputTypeCountGameCityArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountGameCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameCityWhereInput
  }


  /**
   * Count Type GameCountryCountOutputType
   */

  export type GameCountryCountOutputType = {
    Team: number
  }

  export type GameCountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Team?: boolean | GameCountryCountOutputTypeCountTeamArgs
  }

  // Custom InputTypes
  /**
   * GameCountryCountOutputType without action
   */
  export type GameCountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountryCountOutputType
     */
    select?: GameCountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountryCountOutputType without action
   */
  export type GameCountryCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    currentGameId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    currentGameId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    password: string | null
    currentGameId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    password: string | null
    currentGameId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    password: number
    currentGameId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    currentGameId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    currentGameId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    password?: true
    currentGameId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    password?: true
    currentGameId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    password?: true
    currentGameId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    name: string | null
    password: string
    currentGameId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    password?: boolean
    currentGameId?: boolean
    CurrentGame?: boolean | User$CurrentGameArgs<ExtArgs>
    GamesCreated?: boolean | User$GamesCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    password?: boolean
    currentGameId?: boolean
    CurrentGame?: boolean | User$CurrentGameArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    password?: boolean
    currentGameId?: boolean
    CurrentGame?: boolean | User$CurrentGameArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    password?: boolean
    currentGameId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "password" | "currentGameId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CurrentGame?: boolean | User$CurrentGameArgs<ExtArgs>
    GamesCreated?: boolean | User$GamesCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CurrentGame?: boolean | User$CurrentGameArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CurrentGame?: boolean | User$CurrentGameArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      CurrentGame: Prisma.$GamePayload<ExtArgs> | null
      GamesCreated: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string | null
      password: string
      currentGameId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CurrentGame<T extends User$CurrentGameArgs<ExtArgs> = {}>(args?: Subset<T, User$CurrentGameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GamesCreated<T extends User$GamesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$GamesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly currentGameId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.CurrentGame
   */
  export type User$CurrentGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * User.GamesCreated
   */
  export type User$GamesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    ecologicalLevel: number | null
    creatorId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    ecologicalLevel: number | null
    creatorId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    ecologicalLevel: number | null
    isActive: boolean | null
    creatorId: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    ecologicalLevel: number | null
    isActive: boolean | null
    creatorId: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    password: number
    ecologicalLevel: number
    isActive: number
    creatorId: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    ecologicalLevel?: true
    creatorId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    ecologicalLevel?: true
    creatorId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    ecologicalLevel?: true
    isActive?: true
    creatorId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    ecologicalLevel?: true
    isActive?: true
    creatorId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    ecologicalLevel?: true
    isActive?: true
    creatorId?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    name: string
    password: string
    ecologicalLevel: number
    isActive: boolean
    creatorId: number
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    ecologicalLevel?: boolean
    isActive?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Game$playersArgs<ExtArgs>
    GameCity?: boolean | Game$GameCityArgs<ExtArgs>
    GameCountry?: boolean | Game$GameCountryArgs<ExtArgs>
    Team?: boolean | Game$TeamArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    ecologicalLevel?: boolean
    isActive?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    ecologicalLevel?: boolean
    isActive?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    ecologicalLevel?: boolean
    isActive?: boolean
    creatorId?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "ecologicalLevel" | "isActive" | "creatorId", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Game$playersArgs<ExtArgs>
    GameCity?: boolean | Game$GameCityArgs<ExtArgs>
    GameCountry?: boolean | Game$GameCountryArgs<ExtArgs>
    Team?: boolean | Game$TeamArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      players: Prisma.$UserPayload<ExtArgs>[]
      GameCity: Prisma.$GameCityPayload<ExtArgs>[]
      GameCountry: Prisma.$GameCountryPayload<ExtArgs>[]
      Team: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      ecologicalLevel: number
      isActive: boolean
      creatorId: number
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Game$playersArgs<ExtArgs> = {}>(args?: Subset<T, Game$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GameCity<T extends Game$GameCityArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameCityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GameCountry<T extends Game$GameCountryArgs<ExtArgs> = {}>(args?: Subset<T, Game$GameCountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Team<T extends Game$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Game$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly password: FieldRef<"Game", 'String'>
    readonly ecologicalLevel: FieldRef<"Game", 'Int'>
    readonly isActive: FieldRef<"Game", 'Boolean'>
    readonly creatorId: FieldRef<"Game", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.players
   */
  export type Game$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Game.GameCity
   */
  export type Game$GameCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    where?: GameCityWhereInput
    orderBy?: GameCityOrderByWithRelationInput | GameCityOrderByWithRelationInput[]
    cursor?: GameCityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameCityScalarFieldEnum | GameCityScalarFieldEnum[]
  }

  /**
   * Game.GameCountry
   */
  export type Game$GameCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    where?: GameCountryWhereInput
    orderBy?: GameCountryOrderByWithRelationInput | GameCountryOrderByWithRelationInput[]
    cursor?: GameCountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameCountryScalarFieldEnum | GameCountryScalarFieldEnum[]
  }

  /**
   * Game.Team
   */
  export type Game$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    bombsCount: number | null
    money: number | null
    gameCountryId: number | null
    gameId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    bombsCount: number | null
    money: number | null
    gameCountryId: number | null
    gameId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    hasNuclearWeapons: boolean | null
    bombsCount: number | null
    money: number | null
    gameCountryId: number | null
    gameId: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    hasNuclearWeapons: boolean | null
    bombsCount: number | null
    money: number | null
    gameCountryId: number | null
    gameId: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    hasNuclearWeapons: number
    bombsCount: number
    money: number
    gameCountryId: number
    gameId: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    bombsCount?: true
    money?: true
    gameCountryId?: true
    gameId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    bombsCount?: true
    money?: true
    gameCountryId?: true
    gameId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    hasNuclearWeapons?: true
    bombsCount?: true
    money?: true
    gameCountryId?: true
    gameId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    hasNuclearWeapons?: true
    bombsCount?: true
    money?: true
    gameCountryId?: true
    gameId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    hasNuclearWeapons?: true
    bombsCount?: true
    money?: true
    gameCountryId?: true
    gameId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    hasNuclearWeapons: boolean
    bombsCount: number
    money: number
    gameCountryId: number
    gameId: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasNuclearWeapons?: boolean
    bombsCount?: boolean
    money?: boolean
    gameCountryId?: boolean
    gameId?: boolean
    GameCountry?: boolean | GameCountryDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
    Sanctions?: boolean | Team$SanctionsArgs<ExtArgs>
    IncomingSanctions?: boolean | Team$IncomingSanctionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasNuclearWeapons?: boolean
    bombsCount?: boolean
    money?: boolean
    gameCountryId?: boolean
    gameId?: boolean
    GameCountry?: boolean | GameCountryDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hasNuclearWeapons?: boolean
    bombsCount?: boolean
    money?: boolean
    gameCountryId?: boolean
    gameId?: boolean
    GameCountry?: boolean | GameCountryDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    hasNuclearWeapons?: boolean
    bombsCount?: boolean
    money?: boolean
    gameCountryId?: boolean
    gameId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hasNuclearWeapons" | "bombsCount" | "money" | "gameCountryId" | "gameId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameCountry?: boolean | GameCountryDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
    Sanctions?: boolean | Team$SanctionsArgs<ExtArgs>
    IncomingSanctions?: boolean | Team$IncomingSanctionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameCountry?: boolean | GameCountryDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GameCountry?: boolean | GameCountryDefaultArgs<ExtArgs>
    Game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      GameCountry: Prisma.$GameCountryPayload<ExtArgs>
      Game: Prisma.$GamePayload<ExtArgs>
      Sanctions: Prisma.$SanctionsPayload<ExtArgs>[]
      IncomingSanctions: Prisma.$SanctionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hasNuclearWeapons: boolean
      bombsCount: number
      money: number
      gameCountryId: number
      gameId: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GameCountry<T extends GameCountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameCountryDefaultArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sanctions<T extends Team$SanctionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$SanctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    IncomingSanctions<T extends Team$IncomingSanctionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$IncomingSanctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly hasNuclearWeapons: FieldRef<"Team", 'Boolean'>
    readonly bombsCount: FieldRef<"Team", 'Int'>
    readonly money: FieldRef<"Team", 'Int'>
    readonly gameCountryId: FieldRef<"Team", 'Int'>
    readonly gameId: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.Sanctions
   */
  export type Team$SanctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    where?: SanctionsWhereInput
    orderBy?: SanctionsOrderByWithRelationInput | SanctionsOrderByWithRelationInput[]
    cursor?: SanctionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SanctionsScalarFieldEnum | SanctionsScalarFieldEnum[]
  }

  /**
   * Team.IncomingSanctions
   */
  export type Team$IncomingSanctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    where?: SanctionsWhereInput
    orderBy?: SanctionsOrderByWithRelationInput | SanctionsOrderByWithRelationInput[]
    cursor?: SanctionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SanctionsScalarFieldEnum | SanctionsScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    City?: boolean | Country$CityArgs<ExtArgs>
    GameCountry?: boolean | Country$GameCountryArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    City?: boolean | Country$CityArgs<ExtArgs>
    GameCountry?: boolean | Country$GameCountryArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      City: Prisma.$CityPayload<ExtArgs>[]
      GameCountry: Prisma.$GameCountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    City<T extends Country$CityArgs<ExtArgs> = {}>(args?: Subset<T, Country$CityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GameCountry<T extends Country$GameCountryArgs<ExtArgs> = {}>(args?: Subset<T, Country$GameCountryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.City
   */
  export type Country$CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Country.GameCountry
   */
  export type Country$GameCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    where?: GameCountryWhereInput
    orderBy?: GameCountryOrderByWithRelationInput | GameCountryOrderByWithRelationInput[]
    cursor?: GameCountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameCountryScalarFieldEnum | GameCountryScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    name: string | null
    countryId: number | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    countryId: number | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    countryId: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    name: string
    countryId: number
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    GameCity?: boolean | City$GameCityArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    countryId?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countryId", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    GameCity?: boolean | City$GameCityArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      GameCity: Prisma.$GameCityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      countryId: number
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    GameCity<T extends City$GameCityArgs<ExtArgs> = {}>(args?: Subset<T, City$GameCityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
    readonly countryId: FieldRef<"City", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.GameCity
   */
  export type City$GameCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    where?: GameCityWhereInput
    orderBy?: GameCityOrderByWithRelationInput | GameCityOrderByWithRelationInput[]
    cursor?: GameCityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameCityScalarFieldEnum | GameCityScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model GameCity
   */

  export type AggregateGameCity = {
    _count: GameCityCountAggregateOutputType | null
    _avg: GameCityAvgAggregateOutputType | null
    _sum: GameCitySumAggregateOutputType | null
    _min: GameCityMinAggregateOutputType | null
    _max: GameCityMaxAggregateOutputType | null
  }

  export type GameCityAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    cityId: number | null
    protectionLevel: number | null
    standartOfLiving: number | null
    revenue: number | null
    developmentLevel: number | null
  }

  export type GameCitySumAggregateOutputType = {
    id: number | null
    gameId: number | null
    cityId: number | null
    protectionLevel: number | null
    standartOfLiving: number | null
    revenue: number | null
    developmentLevel: number | null
  }

  export type GameCityMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    cityId: number | null
    protectionLevel: number | null
    standartOfLiving: number | null
    revenue: number | null
    developmentLevel: number | null
  }

  export type GameCityMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    cityId: number | null
    protectionLevel: number | null
    standartOfLiving: number | null
    revenue: number | null
    developmentLevel: number | null
  }

  export type GameCityCountAggregateOutputType = {
    id: number
    gameId: number
    cityId: number
    protectionLevel: number
    standartOfLiving: number
    revenue: number
    developmentLevel: number
    _all: number
  }


  export type GameCityAvgAggregateInputType = {
    id?: true
    gameId?: true
    cityId?: true
    protectionLevel?: true
    standartOfLiving?: true
    revenue?: true
    developmentLevel?: true
  }

  export type GameCitySumAggregateInputType = {
    id?: true
    gameId?: true
    cityId?: true
    protectionLevel?: true
    standartOfLiving?: true
    revenue?: true
    developmentLevel?: true
  }

  export type GameCityMinAggregateInputType = {
    id?: true
    gameId?: true
    cityId?: true
    protectionLevel?: true
    standartOfLiving?: true
    revenue?: true
    developmentLevel?: true
  }

  export type GameCityMaxAggregateInputType = {
    id?: true
    gameId?: true
    cityId?: true
    protectionLevel?: true
    standartOfLiving?: true
    revenue?: true
    developmentLevel?: true
  }

  export type GameCityCountAggregateInputType = {
    id?: true
    gameId?: true
    cityId?: true
    protectionLevel?: true
    standartOfLiving?: true
    revenue?: true
    developmentLevel?: true
    _all?: true
  }

  export type GameCityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameCity to aggregate.
     */
    where?: GameCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCities to fetch.
     */
    orderBy?: GameCityOrderByWithRelationInput | GameCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameCities
    **/
    _count?: true | GameCityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameCityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameCitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameCityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameCityMaxAggregateInputType
  }

  export type GetGameCityAggregateType<T extends GameCityAggregateArgs> = {
        [P in keyof T & keyof AggregateGameCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameCity[P]>
      : GetScalarType<T[P], AggregateGameCity[P]>
  }




  export type GameCityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameCityWhereInput
    orderBy?: GameCityOrderByWithAggregationInput | GameCityOrderByWithAggregationInput[]
    by: GameCityScalarFieldEnum[] | GameCityScalarFieldEnum
    having?: GameCityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCityCountAggregateInputType | true
    _avg?: GameCityAvgAggregateInputType
    _sum?: GameCitySumAggregateInputType
    _min?: GameCityMinAggregateInputType
    _max?: GameCityMaxAggregateInputType
  }

  export type GameCityGroupByOutputType = {
    id: number
    gameId: number
    cityId: number
    protectionLevel: number
    standartOfLiving: number
    revenue: number
    developmentLevel: number
    _count: GameCityCountAggregateOutputType | null
    _avg: GameCityAvgAggregateOutputType | null
    _sum: GameCitySumAggregateOutputType | null
    _min: GameCityMinAggregateOutputType | null
    _max: GameCityMaxAggregateOutputType | null
  }

  type GetGameCityGroupByPayload<T extends GameCityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameCityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameCityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameCityGroupByOutputType[P]>
            : GetScalarType<T[P], GameCityGroupByOutputType[P]>
        }
      >
    >


  export type GameCitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    cityId?: boolean
    protectionLevel?: boolean
    standartOfLiving?: boolean
    revenue?: boolean
    developmentLevel?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameCity"]>

  export type GameCitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    cityId?: boolean
    protectionLevel?: boolean
    standartOfLiving?: boolean
    revenue?: boolean
    developmentLevel?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameCity"]>

  export type GameCitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    cityId?: boolean
    protectionLevel?: boolean
    standartOfLiving?: boolean
    revenue?: boolean
    developmentLevel?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameCity"]>

  export type GameCitySelectScalar = {
    id?: boolean
    gameId?: boolean
    cityId?: boolean
    protectionLevel?: boolean
    standartOfLiving?: boolean
    revenue?: boolean
    developmentLevel?: boolean
  }

  export type GameCityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "cityId" | "protectionLevel" | "standartOfLiving" | "revenue" | "developmentLevel", ExtArgs["result"]["gameCity"]>
  export type GameCityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type GameCityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type GameCityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $GameCityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameCity"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      cityId: number
      protectionLevel: number
      standartOfLiving: number
      revenue: number
      developmentLevel: number
    }, ExtArgs["result"]["gameCity"]>
    composites: {}
  }

  type GameCityGetPayload<S extends boolean | null | undefined | GameCityDefaultArgs> = $Result.GetResult<Prisma.$GameCityPayload, S>

  type GameCityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameCityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCityCountAggregateInputType | true
    }

  export interface GameCityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameCity'], meta: { name: 'GameCity' } }
    /**
     * Find zero or one GameCity that matches the filter.
     * @param {GameCityFindUniqueArgs} args - Arguments to find a GameCity
     * @example
     * // Get one GameCity
     * const gameCity = await prisma.gameCity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameCityFindUniqueArgs>(args: SelectSubset<T, GameCityFindUniqueArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameCity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameCityFindUniqueOrThrowArgs} args - Arguments to find a GameCity
     * @example
     * // Get one GameCity
     * const gameCity = await prisma.gameCity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameCityFindUniqueOrThrowArgs>(args: SelectSubset<T, GameCityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameCity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityFindFirstArgs} args - Arguments to find a GameCity
     * @example
     * // Get one GameCity
     * const gameCity = await prisma.gameCity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameCityFindFirstArgs>(args?: SelectSubset<T, GameCityFindFirstArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameCity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityFindFirstOrThrowArgs} args - Arguments to find a GameCity
     * @example
     * // Get one GameCity
     * const gameCity = await prisma.gameCity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameCityFindFirstOrThrowArgs>(args?: SelectSubset<T, GameCityFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameCities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameCities
     * const gameCities = await prisma.gameCity.findMany()
     * 
     * // Get first 10 GameCities
     * const gameCities = await prisma.gameCity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameCityWithIdOnly = await prisma.gameCity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameCityFindManyArgs>(args?: SelectSubset<T, GameCityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameCity.
     * @param {GameCityCreateArgs} args - Arguments to create a GameCity.
     * @example
     * // Create one GameCity
     * const GameCity = await prisma.gameCity.create({
     *   data: {
     *     // ... data to create a GameCity
     *   }
     * })
     * 
     */
    create<T extends GameCityCreateArgs>(args: SelectSubset<T, GameCityCreateArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameCities.
     * @param {GameCityCreateManyArgs} args - Arguments to create many GameCities.
     * @example
     * // Create many GameCities
     * const gameCity = await prisma.gameCity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCityCreateManyArgs>(args?: SelectSubset<T, GameCityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameCities and returns the data saved in the database.
     * @param {GameCityCreateManyAndReturnArgs} args - Arguments to create many GameCities.
     * @example
     * // Create many GameCities
     * const gameCity = await prisma.gameCity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameCities and only return the `id`
     * const gameCityWithIdOnly = await prisma.gameCity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCityCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameCity.
     * @param {GameCityDeleteArgs} args - Arguments to delete one GameCity.
     * @example
     * // Delete one GameCity
     * const GameCity = await prisma.gameCity.delete({
     *   where: {
     *     // ... filter to delete one GameCity
     *   }
     * })
     * 
     */
    delete<T extends GameCityDeleteArgs>(args: SelectSubset<T, GameCityDeleteArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameCity.
     * @param {GameCityUpdateArgs} args - Arguments to update one GameCity.
     * @example
     * // Update one GameCity
     * const gameCity = await prisma.gameCity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameCityUpdateArgs>(args: SelectSubset<T, GameCityUpdateArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameCities.
     * @param {GameCityDeleteManyArgs} args - Arguments to filter GameCities to delete.
     * @example
     * // Delete a few GameCities
     * const { count } = await prisma.gameCity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameCityDeleteManyArgs>(args?: SelectSubset<T, GameCityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameCities
     * const gameCity = await prisma.gameCity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameCityUpdateManyArgs>(args: SelectSubset<T, GameCityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameCities and returns the data updated in the database.
     * @param {GameCityUpdateManyAndReturnArgs} args - Arguments to update many GameCities.
     * @example
     * // Update many GameCities
     * const gameCity = await prisma.gameCity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameCities and only return the `id`
     * const gameCityWithIdOnly = await prisma.gameCity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameCityUpdateManyAndReturnArgs>(args: SelectSubset<T, GameCityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameCity.
     * @param {GameCityUpsertArgs} args - Arguments to update or create a GameCity.
     * @example
     * // Update or create a GameCity
     * const gameCity = await prisma.gameCity.upsert({
     *   create: {
     *     // ... data to create a GameCity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameCity we want to update
     *   }
     * })
     */
    upsert<T extends GameCityUpsertArgs>(args: SelectSubset<T, GameCityUpsertArgs<ExtArgs>>): Prisma__GameCityClient<$Result.GetResult<Prisma.$GameCityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityCountArgs} args - Arguments to filter GameCities to count.
     * @example
     * // Count the number of GameCities
     * const count = await prisma.gameCity.count({
     *   where: {
     *     // ... the filter for the GameCities we want to count
     *   }
     * })
    **/
    count<T extends GameCityCountArgs>(
      args?: Subset<T, GameCityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameCityAggregateArgs>(args: Subset<T, GameCityAggregateArgs>): Prisma.PrismaPromise<GetGameCityAggregateType<T>>

    /**
     * Group by GameCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameCityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameCityGroupByArgs['orderBy'] }
        : { orderBy?: GameCityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameCityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameCity model
   */
  readonly fields: GameCityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameCity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameCityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameCity model
   */
  interface GameCityFieldRefs {
    readonly id: FieldRef<"GameCity", 'Int'>
    readonly gameId: FieldRef<"GameCity", 'Int'>
    readonly cityId: FieldRef<"GameCity", 'Int'>
    readonly protectionLevel: FieldRef<"GameCity", 'Int'>
    readonly standartOfLiving: FieldRef<"GameCity", 'Int'>
    readonly revenue: FieldRef<"GameCity", 'Int'>
    readonly developmentLevel: FieldRef<"GameCity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameCity findUnique
   */
  export type GameCityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * Filter, which GameCity to fetch.
     */
    where: GameCityWhereUniqueInput
  }

  /**
   * GameCity findUniqueOrThrow
   */
  export type GameCityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * Filter, which GameCity to fetch.
     */
    where: GameCityWhereUniqueInput
  }

  /**
   * GameCity findFirst
   */
  export type GameCityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * Filter, which GameCity to fetch.
     */
    where?: GameCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCities to fetch.
     */
    orderBy?: GameCityOrderByWithRelationInput | GameCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameCities.
     */
    cursor?: GameCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameCities.
     */
    distinct?: GameCityScalarFieldEnum | GameCityScalarFieldEnum[]
  }

  /**
   * GameCity findFirstOrThrow
   */
  export type GameCityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * Filter, which GameCity to fetch.
     */
    where?: GameCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCities to fetch.
     */
    orderBy?: GameCityOrderByWithRelationInput | GameCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameCities.
     */
    cursor?: GameCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameCities.
     */
    distinct?: GameCityScalarFieldEnum | GameCityScalarFieldEnum[]
  }

  /**
   * GameCity findMany
   */
  export type GameCityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * Filter, which GameCities to fetch.
     */
    where?: GameCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCities to fetch.
     */
    orderBy?: GameCityOrderByWithRelationInput | GameCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameCities.
     */
    cursor?: GameCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCities.
     */
    skip?: number
    distinct?: GameCityScalarFieldEnum | GameCityScalarFieldEnum[]
  }

  /**
   * GameCity create
   */
  export type GameCityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * The data needed to create a GameCity.
     */
    data: XOR<GameCityCreateInput, GameCityUncheckedCreateInput>
  }

  /**
   * GameCity createMany
   */
  export type GameCityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameCities.
     */
    data: GameCityCreateManyInput | GameCityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameCity createManyAndReturn
   */
  export type GameCityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * The data used to create many GameCities.
     */
    data: GameCityCreateManyInput | GameCityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameCity update
   */
  export type GameCityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * The data needed to update a GameCity.
     */
    data: XOR<GameCityUpdateInput, GameCityUncheckedUpdateInput>
    /**
     * Choose, which GameCity to update.
     */
    where: GameCityWhereUniqueInput
  }

  /**
   * GameCity updateMany
   */
  export type GameCityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameCities.
     */
    data: XOR<GameCityUpdateManyMutationInput, GameCityUncheckedUpdateManyInput>
    /**
     * Filter which GameCities to update
     */
    where?: GameCityWhereInput
    /**
     * Limit how many GameCities to update.
     */
    limit?: number
  }

  /**
   * GameCity updateManyAndReturn
   */
  export type GameCityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * The data used to update GameCities.
     */
    data: XOR<GameCityUpdateManyMutationInput, GameCityUncheckedUpdateManyInput>
    /**
     * Filter which GameCities to update
     */
    where?: GameCityWhereInput
    /**
     * Limit how many GameCities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameCity upsert
   */
  export type GameCityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * The filter to search for the GameCity to update in case it exists.
     */
    where: GameCityWhereUniqueInput
    /**
     * In case the GameCity found by the `where` argument doesn't exist, create a new GameCity with this data.
     */
    create: XOR<GameCityCreateInput, GameCityUncheckedCreateInput>
    /**
     * In case the GameCity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameCityUpdateInput, GameCityUncheckedUpdateInput>
  }

  /**
   * GameCity delete
   */
  export type GameCityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
    /**
     * Filter which GameCity to delete.
     */
    where: GameCityWhereUniqueInput
  }

  /**
   * GameCity deleteMany
   */
  export type GameCityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameCities to delete
     */
    where?: GameCityWhereInput
    /**
     * Limit how many GameCities to delete.
     */
    limit?: number
  }

  /**
   * GameCity without action
   */
  export type GameCityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCity
     */
    select?: GameCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCity
     */
    omit?: GameCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCityInclude<ExtArgs> | null
  }


  /**
   * Model GameCountry
   */

  export type AggregateGameCountry = {
    _count: GameCountryCountAggregateOutputType | null
    _avg: GameCountryAvgAggregateOutputType | null
    _sum: GameCountrySumAggregateOutputType | null
    _min: GameCountryMinAggregateOutputType | null
    _max: GameCountryMaxAggregateOutputType | null
  }

  export type GameCountryAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    countryId: number | null
  }

  export type GameCountrySumAggregateOutputType = {
    id: number | null
    gameId: number | null
    countryId: number | null
  }

  export type GameCountryMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    countryId: number | null
    isActive: boolean | null
  }

  export type GameCountryMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    countryId: number | null
    isActive: boolean | null
  }

  export type GameCountryCountAggregateOutputType = {
    id: number
    gameId: number
    countryId: number
    isActive: number
    _all: number
  }


  export type GameCountryAvgAggregateInputType = {
    id?: true
    gameId?: true
    countryId?: true
  }

  export type GameCountrySumAggregateInputType = {
    id?: true
    gameId?: true
    countryId?: true
  }

  export type GameCountryMinAggregateInputType = {
    id?: true
    gameId?: true
    countryId?: true
    isActive?: true
  }

  export type GameCountryMaxAggregateInputType = {
    id?: true
    gameId?: true
    countryId?: true
    isActive?: true
  }

  export type GameCountryCountAggregateInputType = {
    id?: true
    gameId?: true
    countryId?: true
    isActive?: true
    _all?: true
  }

  export type GameCountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameCountry to aggregate.
     */
    where?: GameCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCountries to fetch.
     */
    orderBy?: GameCountryOrderByWithRelationInput | GameCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameCountries
    **/
    _count?: true | GameCountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameCountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameCountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameCountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameCountryMaxAggregateInputType
  }

  export type GetGameCountryAggregateType<T extends GameCountryAggregateArgs> = {
        [P in keyof T & keyof AggregateGameCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameCountry[P]>
      : GetScalarType<T[P], AggregateGameCountry[P]>
  }




  export type GameCountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameCountryWhereInput
    orderBy?: GameCountryOrderByWithAggregationInput | GameCountryOrderByWithAggregationInput[]
    by: GameCountryScalarFieldEnum[] | GameCountryScalarFieldEnum
    having?: GameCountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountryCountAggregateInputType | true
    _avg?: GameCountryAvgAggregateInputType
    _sum?: GameCountrySumAggregateInputType
    _min?: GameCountryMinAggregateInputType
    _max?: GameCountryMaxAggregateInputType
  }

  export type GameCountryGroupByOutputType = {
    id: number
    gameId: number
    countryId: number
    isActive: boolean
    _count: GameCountryCountAggregateOutputType | null
    _avg: GameCountryAvgAggregateOutputType | null
    _sum: GameCountrySumAggregateOutputType | null
    _min: GameCountryMinAggregateOutputType | null
    _max: GameCountryMaxAggregateOutputType | null
  }

  type GetGameCountryGroupByPayload<T extends GameCountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameCountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameCountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameCountryGroupByOutputType[P]>
            : GetScalarType<T[P], GameCountryGroupByOutputType[P]>
        }
      >
    >


  export type GameCountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    countryId?: boolean
    isActive?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    Team?: boolean | GameCountry$TeamArgs<ExtArgs>
    _count?: boolean | GameCountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameCountry"]>

  export type GameCountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    countryId?: boolean
    isActive?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameCountry"]>

  export type GameCountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    countryId?: boolean
    isActive?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameCountry"]>

  export type GameCountrySelectScalar = {
    id?: boolean
    gameId?: boolean
    countryId?: boolean
    isActive?: boolean
  }

  export type GameCountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "countryId" | "isActive", ExtArgs["result"]["gameCountry"]>
  export type GameCountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    Team?: boolean | GameCountry$TeamArgs<ExtArgs>
    _count?: boolean | GameCountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameCountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type GameCountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $GameCountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameCountry"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      Team: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      countryId: number
      isActive: boolean
    }, ExtArgs["result"]["gameCountry"]>
    composites: {}
  }

  type GameCountryGetPayload<S extends boolean | null | undefined | GameCountryDefaultArgs> = $Result.GetResult<Prisma.$GameCountryPayload, S>

  type GameCountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameCountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountryCountAggregateInputType | true
    }

  export interface GameCountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameCountry'], meta: { name: 'GameCountry' } }
    /**
     * Find zero or one GameCountry that matches the filter.
     * @param {GameCountryFindUniqueArgs} args - Arguments to find a GameCountry
     * @example
     * // Get one GameCountry
     * const gameCountry = await prisma.gameCountry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameCountryFindUniqueArgs>(args: SelectSubset<T, GameCountryFindUniqueArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameCountry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameCountryFindUniqueOrThrowArgs} args - Arguments to find a GameCountry
     * @example
     * // Get one GameCountry
     * const gameCountry = await prisma.gameCountry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameCountryFindUniqueOrThrowArgs>(args: SelectSubset<T, GameCountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameCountry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryFindFirstArgs} args - Arguments to find a GameCountry
     * @example
     * // Get one GameCountry
     * const gameCountry = await prisma.gameCountry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameCountryFindFirstArgs>(args?: SelectSubset<T, GameCountryFindFirstArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameCountry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryFindFirstOrThrowArgs} args - Arguments to find a GameCountry
     * @example
     * // Get one GameCountry
     * const gameCountry = await prisma.gameCountry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameCountryFindFirstOrThrowArgs>(args?: SelectSubset<T, GameCountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameCountries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameCountries
     * const gameCountries = await prisma.gameCountry.findMany()
     * 
     * // Get first 10 GameCountries
     * const gameCountries = await prisma.gameCountry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameCountryWithIdOnly = await prisma.gameCountry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameCountryFindManyArgs>(args?: SelectSubset<T, GameCountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameCountry.
     * @param {GameCountryCreateArgs} args - Arguments to create a GameCountry.
     * @example
     * // Create one GameCountry
     * const GameCountry = await prisma.gameCountry.create({
     *   data: {
     *     // ... data to create a GameCountry
     *   }
     * })
     * 
     */
    create<T extends GameCountryCreateArgs>(args: SelectSubset<T, GameCountryCreateArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameCountries.
     * @param {GameCountryCreateManyArgs} args - Arguments to create many GameCountries.
     * @example
     * // Create many GameCountries
     * const gameCountry = await prisma.gameCountry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCountryCreateManyArgs>(args?: SelectSubset<T, GameCountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameCountries and returns the data saved in the database.
     * @param {GameCountryCreateManyAndReturnArgs} args - Arguments to create many GameCountries.
     * @example
     * // Create many GameCountries
     * const gameCountry = await prisma.gameCountry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameCountries and only return the `id`
     * const gameCountryWithIdOnly = await prisma.gameCountry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCountryCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameCountry.
     * @param {GameCountryDeleteArgs} args - Arguments to delete one GameCountry.
     * @example
     * // Delete one GameCountry
     * const GameCountry = await prisma.gameCountry.delete({
     *   where: {
     *     // ... filter to delete one GameCountry
     *   }
     * })
     * 
     */
    delete<T extends GameCountryDeleteArgs>(args: SelectSubset<T, GameCountryDeleteArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameCountry.
     * @param {GameCountryUpdateArgs} args - Arguments to update one GameCountry.
     * @example
     * // Update one GameCountry
     * const gameCountry = await prisma.gameCountry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameCountryUpdateArgs>(args: SelectSubset<T, GameCountryUpdateArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameCountries.
     * @param {GameCountryDeleteManyArgs} args - Arguments to filter GameCountries to delete.
     * @example
     * // Delete a few GameCountries
     * const { count } = await prisma.gameCountry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameCountryDeleteManyArgs>(args?: SelectSubset<T, GameCountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameCountries
     * const gameCountry = await prisma.gameCountry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameCountryUpdateManyArgs>(args: SelectSubset<T, GameCountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameCountries and returns the data updated in the database.
     * @param {GameCountryUpdateManyAndReturnArgs} args - Arguments to update many GameCountries.
     * @example
     * // Update many GameCountries
     * const gameCountry = await prisma.gameCountry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameCountries and only return the `id`
     * const gameCountryWithIdOnly = await prisma.gameCountry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameCountryUpdateManyAndReturnArgs>(args: SelectSubset<T, GameCountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameCountry.
     * @param {GameCountryUpsertArgs} args - Arguments to update or create a GameCountry.
     * @example
     * // Update or create a GameCountry
     * const gameCountry = await prisma.gameCountry.upsert({
     *   create: {
     *     // ... data to create a GameCountry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameCountry we want to update
     *   }
     * })
     */
    upsert<T extends GameCountryUpsertArgs>(args: SelectSubset<T, GameCountryUpsertArgs<ExtArgs>>): Prisma__GameCountryClient<$Result.GetResult<Prisma.$GameCountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryCountArgs} args - Arguments to filter GameCountries to count.
     * @example
     * // Count the number of GameCountries
     * const count = await prisma.gameCountry.count({
     *   where: {
     *     // ... the filter for the GameCountries we want to count
     *   }
     * })
    **/
    count<T extends GameCountryCountArgs>(
      args?: Subset<T, GameCountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameCountry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameCountryAggregateArgs>(args: Subset<T, GameCountryAggregateArgs>): Prisma.PrismaPromise<GetGameCountryAggregateType<T>>

    /**
     * Group by GameCountry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameCountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameCountryGroupByArgs['orderBy'] }
        : { orderBy?: GameCountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameCountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameCountry model
   */
  readonly fields: GameCountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameCountry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameCountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Team<T extends GameCountry$TeamArgs<ExtArgs> = {}>(args?: Subset<T, GameCountry$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameCountry model
   */
  interface GameCountryFieldRefs {
    readonly id: FieldRef<"GameCountry", 'Int'>
    readonly gameId: FieldRef<"GameCountry", 'Int'>
    readonly countryId: FieldRef<"GameCountry", 'Int'>
    readonly isActive: FieldRef<"GameCountry", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GameCountry findUnique
   */
  export type GameCountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * Filter, which GameCountry to fetch.
     */
    where: GameCountryWhereUniqueInput
  }

  /**
   * GameCountry findUniqueOrThrow
   */
  export type GameCountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * Filter, which GameCountry to fetch.
     */
    where: GameCountryWhereUniqueInput
  }

  /**
   * GameCountry findFirst
   */
  export type GameCountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * Filter, which GameCountry to fetch.
     */
    where?: GameCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCountries to fetch.
     */
    orderBy?: GameCountryOrderByWithRelationInput | GameCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameCountries.
     */
    cursor?: GameCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameCountries.
     */
    distinct?: GameCountryScalarFieldEnum | GameCountryScalarFieldEnum[]
  }

  /**
   * GameCountry findFirstOrThrow
   */
  export type GameCountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * Filter, which GameCountry to fetch.
     */
    where?: GameCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCountries to fetch.
     */
    orderBy?: GameCountryOrderByWithRelationInput | GameCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameCountries.
     */
    cursor?: GameCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameCountries.
     */
    distinct?: GameCountryScalarFieldEnum | GameCountryScalarFieldEnum[]
  }

  /**
   * GameCountry findMany
   */
  export type GameCountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * Filter, which GameCountries to fetch.
     */
    where?: GameCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameCountries to fetch.
     */
    orderBy?: GameCountryOrderByWithRelationInput | GameCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameCountries.
     */
    cursor?: GameCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameCountries.
     */
    skip?: number
    distinct?: GameCountryScalarFieldEnum | GameCountryScalarFieldEnum[]
  }

  /**
   * GameCountry create
   */
  export type GameCountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * The data needed to create a GameCountry.
     */
    data: XOR<GameCountryCreateInput, GameCountryUncheckedCreateInput>
  }

  /**
   * GameCountry createMany
   */
  export type GameCountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameCountries.
     */
    data: GameCountryCreateManyInput | GameCountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameCountry createManyAndReturn
   */
  export type GameCountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * The data used to create many GameCountries.
     */
    data: GameCountryCreateManyInput | GameCountryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameCountry update
   */
  export type GameCountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * The data needed to update a GameCountry.
     */
    data: XOR<GameCountryUpdateInput, GameCountryUncheckedUpdateInput>
    /**
     * Choose, which GameCountry to update.
     */
    where: GameCountryWhereUniqueInput
  }

  /**
   * GameCountry updateMany
   */
  export type GameCountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameCountries.
     */
    data: XOR<GameCountryUpdateManyMutationInput, GameCountryUncheckedUpdateManyInput>
    /**
     * Filter which GameCountries to update
     */
    where?: GameCountryWhereInput
    /**
     * Limit how many GameCountries to update.
     */
    limit?: number
  }

  /**
   * GameCountry updateManyAndReturn
   */
  export type GameCountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * The data used to update GameCountries.
     */
    data: XOR<GameCountryUpdateManyMutationInput, GameCountryUncheckedUpdateManyInput>
    /**
     * Filter which GameCountries to update
     */
    where?: GameCountryWhereInput
    /**
     * Limit how many GameCountries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameCountry upsert
   */
  export type GameCountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * The filter to search for the GameCountry to update in case it exists.
     */
    where: GameCountryWhereUniqueInput
    /**
     * In case the GameCountry found by the `where` argument doesn't exist, create a new GameCountry with this data.
     */
    create: XOR<GameCountryCreateInput, GameCountryUncheckedCreateInput>
    /**
     * In case the GameCountry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameCountryUpdateInput, GameCountryUncheckedUpdateInput>
  }

  /**
   * GameCountry delete
   */
  export type GameCountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
    /**
     * Filter which GameCountry to delete.
     */
    where: GameCountryWhereUniqueInput
  }

  /**
   * GameCountry deleteMany
   */
  export type GameCountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameCountries to delete
     */
    where?: GameCountryWhereInput
    /**
     * Limit how many GameCountries to delete.
     */
    limit?: number
  }

  /**
   * GameCountry.Team
   */
  export type GameCountry$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * GameCountry without action
   */
  export type GameCountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountry
     */
    select?: GameCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameCountry
     */
    omit?: GameCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameCountryInclude<ExtArgs> | null
  }


  /**
   * Model Sanctions
   */

  export type AggregateSanctions = {
    _count: SanctionsCountAggregateOutputType | null
    _avg: SanctionsAvgAggregateOutputType | null
    _sum: SanctionsSumAggregateOutputType | null
    _min: SanctionsMinAggregateOutputType | null
    _max: SanctionsMaxAggregateOutputType | null
  }

  export type SanctionsAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    sanctionedTeamId: number | null
  }

  export type SanctionsSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    sanctionedTeamId: number | null
  }

  export type SanctionsMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    sanctionedTeamId: number | null
  }

  export type SanctionsMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    sanctionedTeamId: number | null
  }

  export type SanctionsCountAggregateOutputType = {
    id: number
    teamId: number
    sanctionedTeamId: number
    _all: number
  }


  export type SanctionsAvgAggregateInputType = {
    id?: true
    teamId?: true
    sanctionedTeamId?: true
  }

  export type SanctionsSumAggregateInputType = {
    id?: true
    teamId?: true
    sanctionedTeamId?: true
  }

  export type SanctionsMinAggregateInputType = {
    id?: true
    teamId?: true
    sanctionedTeamId?: true
  }

  export type SanctionsMaxAggregateInputType = {
    id?: true
    teamId?: true
    sanctionedTeamId?: true
  }

  export type SanctionsCountAggregateInputType = {
    id?: true
    teamId?: true
    sanctionedTeamId?: true
    _all?: true
  }

  export type SanctionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sanctions to aggregate.
     */
    where?: SanctionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionsOrderByWithRelationInput | SanctionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanctionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sanctions
    **/
    _count?: true | SanctionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SanctionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SanctionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanctionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanctionsMaxAggregateInputType
  }

  export type GetSanctionsAggregateType<T extends SanctionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSanctions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanctions[P]>
      : GetScalarType<T[P], AggregateSanctions[P]>
  }




  export type SanctionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanctionsWhereInput
    orderBy?: SanctionsOrderByWithAggregationInput | SanctionsOrderByWithAggregationInput[]
    by: SanctionsScalarFieldEnum[] | SanctionsScalarFieldEnum
    having?: SanctionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanctionsCountAggregateInputType | true
    _avg?: SanctionsAvgAggregateInputType
    _sum?: SanctionsSumAggregateInputType
    _min?: SanctionsMinAggregateInputType
    _max?: SanctionsMaxAggregateInputType
  }

  export type SanctionsGroupByOutputType = {
    id: number
    teamId: number
    sanctionedTeamId: number
    _count: SanctionsCountAggregateOutputType | null
    _avg: SanctionsAvgAggregateOutputType | null
    _sum: SanctionsSumAggregateOutputType | null
    _min: SanctionsMinAggregateOutputType | null
    _max: SanctionsMaxAggregateOutputType | null
  }

  type GetSanctionsGroupByPayload<T extends SanctionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanctionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanctionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanctionsGroupByOutputType[P]>
            : GetScalarType<T[P], SanctionsGroupByOutputType[P]>
        }
      >
    >


  export type SanctionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    sanctionedTeamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    sanctionedTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanctions"]>

  export type SanctionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    sanctionedTeamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    sanctionedTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanctions"]>

  export type SanctionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    sanctionedTeamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    sanctionedTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanctions"]>

  export type SanctionsSelectScalar = {
    id?: boolean
    teamId?: boolean
    sanctionedTeamId?: boolean
  }

  export type SanctionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "sanctionedTeamId", ExtArgs["result"]["sanctions"]>
  export type SanctionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    sanctionedTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type SanctionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    sanctionedTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type SanctionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    sanctionedTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $SanctionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sanctions"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      sanctionedTeam: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      sanctionedTeamId: number
    }, ExtArgs["result"]["sanctions"]>
    composites: {}
  }

  type SanctionsGetPayload<S extends boolean | null | undefined | SanctionsDefaultArgs> = $Result.GetResult<Prisma.$SanctionsPayload, S>

  type SanctionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanctionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanctionsCountAggregateInputType | true
    }

  export interface SanctionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sanctions'], meta: { name: 'Sanctions' } }
    /**
     * Find zero or one Sanctions that matches the filter.
     * @param {SanctionsFindUniqueArgs} args - Arguments to find a Sanctions
     * @example
     * // Get one Sanctions
     * const sanctions = await prisma.sanctions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanctionsFindUniqueArgs>(args: SelectSubset<T, SanctionsFindUniqueArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sanctions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanctionsFindUniqueOrThrowArgs} args - Arguments to find a Sanctions
     * @example
     * // Get one Sanctions
     * const sanctions = await prisma.sanctions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanctionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SanctionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sanctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsFindFirstArgs} args - Arguments to find a Sanctions
     * @example
     * // Get one Sanctions
     * const sanctions = await prisma.sanctions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanctionsFindFirstArgs>(args?: SelectSubset<T, SanctionsFindFirstArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sanctions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsFindFirstOrThrowArgs} args - Arguments to find a Sanctions
     * @example
     * // Get one Sanctions
     * const sanctions = await prisma.sanctions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanctionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SanctionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sanctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sanctions
     * const sanctions = await prisma.sanctions.findMany()
     * 
     * // Get first 10 Sanctions
     * const sanctions = await prisma.sanctions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sanctionsWithIdOnly = await prisma.sanctions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SanctionsFindManyArgs>(args?: SelectSubset<T, SanctionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sanctions.
     * @param {SanctionsCreateArgs} args - Arguments to create a Sanctions.
     * @example
     * // Create one Sanctions
     * const Sanctions = await prisma.sanctions.create({
     *   data: {
     *     // ... data to create a Sanctions
     *   }
     * })
     * 
     */
    create<T extends SanctionsCreateArgs>(args: SelectSubset<T, SanctionsCreateArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sanctions.
     * @param {SanctionsCreateManyArgs} args - Arguments to create many Sanctions.
     * @example
     * // Create many Sanctions
     * const sanctions = await prisma.sanctions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanctionsCreateManyArgs>(args?: SelectSubset<T, SanctionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sanctions and returns the data saved in the database.
     * @param {SanctionsCreateManyAndReturnArgs} args - Arguments to create many Sanctions.
     * @example
     * // Create many Sanctions
     * const sanctions = await prisma.sanctions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sanctions and only return the `id`
     * const sanctionsWithIdOnly = await prisma.sanctions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SanctionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SanctionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sanctions.
     * @param {SanctionsDeleteArgs} args - Arguments to delete one Sanctions.
     * @example
     * // Delete one Sanctions
     * const Sanctions = await prisma.sanctions.delete({
     *   where: {
     *     // ... filter to delete one Sanctions
     *   }
     * })
     * 
     */
    delete<T extends SanctionsDeleteArgs>(args: SelectSubset<T, SanctionsDeleteArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sanctions.
     * @param {SanctionsUpdateArgs} args - Arguments to update one Sanctions.
     * @example
     * // Update one Sanctions
     * const sanctions = await prisma.sanctions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanctionsUpdateArgs>(args: SelectSubset<T, SanctionsUpdateArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sanctions.
     * @param {SanctionsDeleteManyArgs} args - Arguments to filter Sanctions to delete.
     * @example
     * // Delete a few Sanctions
     * const { count } = await prisma.sanctions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanctionsDeleteManyArgs>(args?: SelectSubset<T, SanctionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sanctions
     * const sanctions = await prisma.sanctions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanctionsUpdateManyArgs>(args: SelectSubset<T, SanctionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanctions and returns the data updated in the database.
     * @param {SanctionsUpdateManyAndReturnArgs} args - Arguments to update many Sanctions.
     * @example
     * // Update many Sanctions
     * const sanctions = await prisma.sanctions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sanctions and only return the `id`
     * const sanctionsWithIdOnly = await prisma.sanctions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SanctionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SanctionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sanctions.
     * @param {SanctionsUpsertArgs} args - Arguments to update or create a Sanctions.
     * @example
     * // Update or create a Sanctions
     * const sanctions = await prisma.sanctions.upsert({
     *   create: {
     *     // ... data to create a Sanctions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sanctions we want to update
     *   }
     * })
     */
    upsert<T extends SanctionsUpsertArgs>(args: SelectSubset<T, SanctionsUpsertArgs<ExtArgs>>): Prisma__SanctionsClient<$Result.GetResult<Prisma.$SanctionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sanctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsCountArgs} args - Arguments to filter Sanctions to count.
     * @example
     * // Count the number of Sanctions
     * const count = await prisma.sanctions.count({
     *   where: {
     *     // ... the filter for the Sanctions we want to count
     *   }
     * })
    **/
    count<T extends SanctionsCountArgs>(
      args?: Subset<T, SanctionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanctionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sanctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SanctionsAggregateArgs>(args: Subset<T, SanctionsAggregateArgs>): Prisma.PrismaPromise<GetSanctionsAggregateType<T>>

    /**
     * Group by Sanctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SanctionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanctionsGroupByArgs['orderBy'] }
        : { orderBy?: SanctionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SanctionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanctionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sanctions model
   */
  readonly fields: SanctionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sanctions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanctionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sanctionedTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sanctions model
   */
  interface SanctionsFieldRefs {
    readonly id: FieldRef<"Sanctions", 'Int'>
    readonly teamId: FieldRef<"Sanctions", 'Int'>
    readonly sanctionedTeamId: FieldRef<"Sanctions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sanctions findUnique
   */
  export type SanctionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * Filter, which Sanctions to fetch.
     */
    where: SanctionsWhereUniqueInput
  }

  /**
   * Sanctions findUniqueOrThrow
   */
  export type SanctionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * Filter, which Sanctions to fetch.
     */
    where: SanctionsWhereUniqueInput
  }

  /**
   * Sanctions findFirst
   */
  export type SanctionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * Filter, which Sanctions to fetch.
     */
    where?: SanctionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionsOrderByWithRelationInput | SanctionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sanctions.
     */
    cursor?: SanctionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sanctions.
     */
    distinct?: SanctionsScalarFieldEnum | SanctionsScalarFieldEnum[]
  }

  /**
   * Sanctions findFirstOrThrow
   */
  export type SanctionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * Filter, which Sanctions to fetch.
     */
    where?: SanctionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionsOrderByWithRelationInput | SanctionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sanctions.
     */
    cursor?: SanctionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sanctions.
     */
    distinct?: SanctionsScalarFieldEnum | SanctionsScalarFieldEnum[]
  }

  /**
   * Sanctions findMany
   */
  export type SanctionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * Filter, which Sanctions to fetch.
     */
    where?: SanctionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionsOrderByWithRelationInput | SanctionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sanctions.
     */
    cursor?: SanctionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    distinct?: SanctionsScalarFieldEnum | SanctionsScalarFieldEnum[]
  }

  /**
   * Sanctions create
   */
  export type SanctionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sanctions.
     */
    data: XOR<SanctionsCreateInput, SanctionsUncheckedCreateInput>
  }

  /**
   * Sanctions createMany
   */
  export type SanctionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sanctions.
     */
    data: SanctionsCreateManyInput | SanctionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sanctions createManyAndReturn
   */
  export type SanctionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sanctions.
     */
    data: SanctionsCreateManyInput | SanctionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sanctions update
   */
  export type SanctionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sanctions.
     */
    data: XOR<SanctionsUpdateInput, SanctionsUncheckedUpdateInput>
    /**
     * Choose, which Sanctions to update.
     */
    where: SanctionsWhereUniqueInput
  }

  /**
   * Sanctions updateMany
   */
  export type SanctionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sanctions.
     */
    data: XOR<SanctionsUpdateManyMutationInput, SanctionsUncheckedUpdateManyInput>
    /**
     * Filter which Sanctions to update
     */
    where?: SanctionsWhereInput
    /**
     * Limit how many Sanctions to update.
     */
    limit?: number
  }

  /**
   * Sanctions updateManyAndReturn
   */
  export type SanctionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * The data used to update Sanctions.
     */
    data: XOR<SanctionsUpdateManyMutationInput, SanctionsUncheckedUpdateManyInput>
    /**
     * Filter which Sanctions to update
     */
    where?: SanctionsWhereInput
    /**
     * Limit how many Sanctions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sanctions upsert
   */
  export type SanctionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sanctions to update in case it exists.
     */
    where: SanctionsWhereUniqueInput
    /**
     * In case the Sanctions found by the `where` argument doesn't exist, create a new Sanctions with this data.
     */
    create: XOR<SanctionsCreateInput, SanctionsUncheckedCreateInput>
    /**
     * In case the Sanctions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanctionsUpdateInput, SanctionsUncheckedUpdateInput>
  }

  /**
   * Sanctions delete
   */
  export type SanctionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
    /**
     * Filter which Sanctions to delete.
     */
    where: SanctionsWhereUniqueInput
  }

  /**
   * Sanctions deleteMany
   */
  export type SanctionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sanctions to delete
     */
    where?: SanctionsWhereInput
    /**
     * Limit how many Sanctions to delete.
     */
    limit?: number
  }

  /**
   * Sanctions without action
   */
  export type SanctionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanctions
     */
    select?: SanctionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanctions
     */
    omit?: SanctionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanctionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    password: 'password',
    currentGameId: 'currentGameId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    ecologicalLevel: 'ecologicalLevel',
    isActive: 'isActive',
    creatorId: 'creatorId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    hasNuclearWeapons: 'hasNuclearWeapons',
    bombsCount: 'bombsCount',
    money: 'money',
    gameCountryId: 'gameCountryId',
    gameId: 'gameId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const GameCityScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    cityId: 'cityId',
    protectionLevel: 'protectionLevel',
    standartOfLiving: 'standartOfLiving',
    revenue: 'revenue',
    developmentLevel: 'developmentLevel'
  };

  export type GameCityScalarFieldEnum = (typeof GameCityScalarFieldEnum)[keyof typeof GameCityScalarFieldEnum]


  export const GameCountryScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    countryId: 'countryId',
    isActive: 'isActive'
  };

  export type GameCountryScalarFieldEnum = (typeof GameCountryScalarFieldEnum)[keyof typeof GameCountryScalarFieldEnum]


  export const SanctionsScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    sanctionedTeamId: 'sanctionedTeamId'
  };

  export type SanctionsScalarFieldEnum = (typeof SanctionsScalarFieldEnum)[keyof typeof SanctionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    currentGameId?: IntNullableFilter<"User"> | number | null
    CurrentGame?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
    GamesCreated?: GameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    currentGameId?: SortOrderInput | SortOrder
    CurrentGame?: GameOrderByWithRelationInput
    GamesCreated?: GameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    currentGameId?: IntNullableFilter<"User"> | number | null
    CurrentGame?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
    GamesCreated?: GameListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    currentGameId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    currentGameId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    password?: StringFilter<"Game"> | string
    ecologicalLevel?: IntFilter<"Game"> | number
    isActive?: BoolFilter<"Game"> | boolean
    creatorId?: IntFilter<"Game"> | number
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: UserListRelationFilter
    GameCity?: GameCityListRelationFilter
    GameCountry?: GameCountryListRelationFilter
    Team?: TeamListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    ecologicalLevel?: SortOrder
    isActive?: SortOrder
    creatorId?: SortOrder
    creator?: UserOrderByWithRelationInput
    players?: UserOrderByRelationAggregateInput
    GameCity?: GameCityOrderByRelationAggregateInput
    GameCountry?: GameCountryOrderByRelationAggregateInput
    Team?: TeamOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    password?: StringFilter<"Game"> | string
    ecologicalLevel?: IntFilter<"Game"> | number
    isActive?: BoolFilter<"Game"> | boolean
    creatorId?: IntFilter<"Game"> | number
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: UserListRelationFilter
    GameCity?: GameCityListRelationFilter
    GameCountry?: GameCountryListRelationFilter
    Team?: TeamListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    ecologicalLevel?: SortOrder
    isActive?: SortOrder
    creatorId?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    password?: StringWithAggregatesFilter<"Game"> | string
    ecologicalLevel?: IntWithAggregatesFilter<"Game"> | number
    isActive?: BoolWithAggregatesFilter<"Game"> | boolean
    creatorId?: IntWithAggregatesFilter<"Game"> | number
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    hasNuclearWeapons?: BoolFilter<"Team"> | boolean
    bombsCount?: IntFilter<"Team"> | number
    money?: IntFilter<"Team"> | number
    gameCountryId?: IntFilter<"Team"> | number
    gameId?: IntFilter<"Team"> | number
    GameCountry?: XOR<GameCountryScalarRelationFilter, GameCountryWhereInput>
    Game?: XOR<GameScalarRelationFilter, GameWhereInput>
    Sanctions?: SanctionsListRelationFilter
    IncomingSanctions?: SanctionsListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    hasNuclearWeapons?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
    GameCountry?: GameCountryOrderByWithRelationInput
    Game?: GameOrderByWithRelationInput
    Sanctions?: SanctionsOrderByRelationAggregateInput
    IncomingSanctions?: SanctionsOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    hasNuclearWeapons?: BoolFilter<"Team"> | boolean
    bombsCount?: IntFilter<"Team"> | number
    money?: IntFilter<"Team"> | number
    gameCountryId?: IntFilter<"Team"> | number
    gameId?: IntFilter<"Team"> | number
    GameCountry?: XOR<GameCountryScalarRelationFilter, GameCountryWhereInput>
    Game?: XOR<GameScalarRelationFilter, GameWhereInput>
    Sanctions?: SanctionsListRelationFilter
    IncomingSanctions?: SanctionsListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    hasNuclearWeapons?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    hasNuclearWeapons?: BoolWithAggregatesFilter<"Team"> | boolean
    bombsCount?: IntWithAggregatesFilter<"Team"> | number
    money?: IntWithAggregatesFilter<"Team"> | number
    gameCountryId?: IntWithAggregatesFilter<"Team"> | number
    gameId?: IntWithAggregatesFilter<"Team"> | number
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    City?: CityListRelationFilter
    GameCountry?: GameCountryListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    City?: CityOrderByRelationAggregateInput
    GameCountry?: GameCountryOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    City?: CityListRelationFilter
    GameCountry?: GameCountryListRelationFilter
  }, "id" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    countryId?: IntFilter<"City"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    GameCity?: GameCityListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    GameCity?: GameCityOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_countryId?: CityNameCountryIdCompoundUniqueInput
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    countryId?: IntFilter<"City"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    GameCity?: GameCityListRelationFilter
  }, "id" | "name_countryId">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
    countryId?: IntWithAggregatesFilter<"City"> | number
  }

  export type GameCityWhereInput = {
    AND?: GameCityWhereInput | GameCityWhereInput[]
    OR?: GameCityWhereInput[]
    NOT?: GameCityWhereInput | GameCityWhereInput[]
    id?: IntFilter<"GameCity"> | number
    gameId?: IntFilter<"GameCity"> | number
    cityId?: IntFilter<"GameCity"> | number
    protectionLevel?: IntFilter<"GameCity"> | number
    standartOfLiving?: IntFilter<"GameCity"> | number
    revenue?: IntFilter<"GameCity"> | number
    developmentLevel?: IntFilter<"GameCity"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type GameCityOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
    game?: GameOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
  }

  export type GameCityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId_cityId?: GameCityGameIdCityIdCompoundUniqueInput
    AND?: GameCityWhereInput | GameCityWhereInput[]
    OR?: GameCityWhereInput[]
    NOT?: GameCityWhereInput | GameCityWhereInput[]
    gameId?: IntFilter<"GameCity"> | number
    cityId?: IntFilter<"GameCity"> | number
    protectionLevel?: IntFilter<"GameCity"> | number
    standartOfLiving?: IntFilter<"GameCity"> | number
    revenue?: IntFilter<"GameCity"> | number
    developmentLevel?: IntFilter<"GameCity"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id" | "gameId_cityId">

  export type GameCityOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
    _count?: GameCityCountOrderByAggregateInput
    _avg?: GameCityAvgOrderByAggregateInput
    _max?: GameCityMaxOrderByAggregateInput
    _min?: GameCityMinOrderByAggregateInput
    _sum?: GameCitySumOrderByAggregateInput
  }

  export type GameCityScalarWhereWithAggregatesInput = {
    AND?: GameCityScalarWhereWithAggregatesInput | GameCityScalarWhereWithAggregatesInput[]
    OR?: GameCityScalarWhereWithAggregatesInput[]
    NOT?: GameCityScalarWhereWithAggregatesInput | GameCityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameCity"> | number
    gameId?: IntWithAggregatesFilter<"GameCity"> | number
    cityId?: IntWithAggregatesFilter<"GameCity"> | number
    protectionLevel?: IntWithAggregatesFilter<"GameCity"> | number
    standartOfLiving?: IntWithAggregatesFilter<"GameCity"> | number
    revenue?: IntWithAggregatesFilter<"GameCity"> | number
    developmentLevel?: IntWithAggregatesFilter<"GameCity"> | number
  }

  export type GameCountryWhereInput = {
    AND?: GameCountryWhereInput | GameCountryWhereInput[]
    OR?: GameCountryWhereInput[]
    NOT?: GameCountryWhereInput | GameCountryWhereInput[]
    id?: IntFilter<"GameCountry"> | number
    gameId?: IntFilter<"GameCountry"> | number
    countryId?: IntFilter<"GameCountry"> | number
    isActive?: BoolFilter<"GameCountry"> | boolean
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Team?: TeamListRelationFilter
  }

  export type GameCountryOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
    isActive?: SortOrder
    game?: GameOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    Team?: TeamOrderByRelationAggregateInput
  }

  export type GameCountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId_countryId?: GameCountryGameIdCountryIdCompoundUniqueInput
    AND?: GameCountryWhereInput | GameCountryWhereInput[]
    OR?: GameCountryWhereInput[]
    NOT?: GameCountryWhereInput | GameCountryWhereInput[]
    gameId?: IntFilter<"GameCountry"> | number
    countryId?: IntFilter<"GameCountry"> | number
    isActive?: BoolFilter<"GameCountry"> | boolean
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Team?: TeamListRelationFilter
  }, "id" | "gameId_countryId">

  export type GameCountryOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
    isActive?: SortOrder
    _count?: GameCountryCountOrderByAggregateInput
    _avg?: GameCountryAvgOrderByAggregateInput
    _max?: GameCountryMaxOrderByAggregateInput
    _min?: GameCountryMinOrderByAggregateInput
    _sum?: GameCountrySumOrderByAggregateInput
  }

  export type GameCountryScalarWhereWithAggregatesInput = {
    AND?: GameCountryScalarWhereWithAggregatesInput | GameCountryScalarWhereWithAggregatesInput[]
    OR?: GameCountryScalarWhereWithAggregatesInput[]
    NOT?: GameCountryScalarWhereWithAggregatesInput | GameCountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameCountry"> | number
    gameId?: IntWithAggregatesFilter<"GameCountry"> | number
    countryId?: IntWithAggregatesFilter<"GameCountry"> | number
    isActive?: BoolWithAggregatesFilter<"GameCountry"> | boolean
  }

  export type SanctionsWhereInput = {
    AND?: SanctionsWhereInput | SanctionsWhereInput[]
    OR?: SanctionsWhereInput[]
    NOT?: SanctionsWhereInput | SanctionsWhereInput[]
    id?: IntFilter<"Sanctions"> | number
    teamId?: IntFilter<"Sanctions"> | number
    sanctionedTeamId?: IntFilter<"Sanctions"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    sanctionedTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type SanctionsOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
    team?: TeamOrderByWithRelationInput
    sanctionedTeam?: TeamOrderByWithRelationInput
  }

  export type SanctionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamId_sanctionedTeamId?: SanctionsTeamIdSanctionedTeamIdCompoundUniqueInput
    AND?: SanctionsWhereInput | SanctionsWhereInput[]
    OR?: SanctionsWhereInput[]
    NOT?: SanctionsWhereInput | SanctionsWhereInput[]
    teamId?: IntFilter<"Sanctions"> | number
    sanctionedTeamId?: IntFilter<"Sanctions"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    sanctionedTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamId_sanctionedTeamId">

  export type SanctionsOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
    _count?: SanctionsCountOrderByAggregateInput
    _avg?: SanctionsAvgOrderByAggregateInput
    _max?: SanctionsMaxOrderByAggregateInput
    _min?: SanctionsMinOrderByAggregateInput
    _sum?: SanctionsSumOrderByAggregateInput
  }

  export type SanctionsScalarWhereWithAggregatesInput = {
    AND?: SanctionsScalarWhereWithAggregatesInput | SanctionsScalarWhereWithAggregatesInput[]
    OR?: SanctionsScalarWhereWithAggregatesInput[]
    NOT?: SanctionsScalarWhereWithAggregatesInput | SanctionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sanctions"> | number
    teamId?: IntWithAggregatesFilter<"Sanctions"> | number
    sanctionedTeamId?: IntWithAggregatesFilter<"Sanctions"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    name?: string | null
    password: string
    CurrentGame?: GameCreateNestedOneWithoutPlayersInput
    GamesCreated?: GameCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name?: string | null
    password: string
    currentGameId?: number | null
    GamesCreated?: GameUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    CurrentGame?: GameUpdateOneWithoutPlayersNestedInput
    GamesCreated?: GameUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    currentGameId?: NullableIntFieldUpdateOperationsInput | number | null
    GamesCreated?: GameUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name?: string | null
    password: string
    currentGameId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    currentGameId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameCreateInput = {
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creator: UserCreateNestedOneWithoutGamesCreatedInput
    players?: UserCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryCreateNestedManyWithoutGameInput
    Team?: TeamCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creatorId: number
    players?: UserUncheckedCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityUncheckedCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutGameInput
    Team?: TeamUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutGamesCreatedNestedInput
    players?: UserUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUpdateManyWithoutGameNestedInput
    Team?: TeamUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    players?: UserUncheckedUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUncheckedUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUncheckedUpdateManyWithoutGameNestedInput
    Team?: TeamUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creatorId: number
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamCreateInput = {
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    GameCountry: GameCountryCreateNestedOneWithoutTeamInput
    Game: GameCreateNestedOneWithoutTeamInput
    Sanctions?: SanctionsCreateNestedManyWithoutTeamInput
    IncomingSanctions?: SanctionsCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameCountryId: number
    gameId: number
    Sanctions?: SanctionsUncheckedCreateNestedManyWithoutTeamInput
    IncomingSanctions?: SanctionsUncheckedCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamUpdateInput = {
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    GameCountry?: GameCountryUpdateOneRequiredWithoutTeamNestedInput
    Game?: GameUpdateOneRequiredWithoutTeamNestedInput
    Sanctions?: SanctionsUpdateManyWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameCountryId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    Sanctions?: SanctionsUncheckedUpdateManyWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUncheckedUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameCountryId: number
    gameId: number
  }

  export type TeamUpdateManyMutationInput = {
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameCountryId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type CountryCreateInput = {
    name: string
    City?: CityCreateNestedManyWithoutCountryInput
    GameCountry?: GameCountryCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    City?: CityUncheckedCreateNestedManyWithoutCountryInput
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    City?: CityUpdateManyWithoutCountryNestedInput
    GameCountry?: GameCountryUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    City?: CityUncheckedUpdateManyWithoutCountryNestedInput
    GameCountry?: GameCountryUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    name: string
    country: CountryCreateNestedOneWithoutCityInput
    GameCity?: GameCityCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    countryId: number
    GameCity?: GameCityUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutCityNestedInput
    GameCity?: GameCityUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    GameCity?: GameCityUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    name: string
    countryId: number
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCityCreateInput = {
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
    game: GameCreateNestedOneWithoutGameCityInput
    city: CityCreateNestedOneWithoutGameCityInput
  }

  export type GameCityUncheckedCreateInput = {
    id?: number
    gameId: number
    cityId: number
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
  }

  export type GameCityUpdateInput = {
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutGameCityNestedInput
    city?: CityUpdateOneRequiredWithoutGameCityNestedInput
  }

  export type GameCityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type GameCityCreateManyInput = {
    id?: number
    gameId: number
    cityId: number
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
  }

  export type GameCityUpdateManyMutationInput = {
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type GameCityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type GameCountryCreateInput = {
    isActive?: boolean
    game: GameCreateNestedOneWithoutGameCountryInput
    country: CountryCreateNestedOneWithoutGameCountryInput
    Team?: TeamCreateNestedManyWithoutGameCountryInput
  }

  export type GameCountryUncheckedCreateInput = {
    id?: number
    gameId: number
    countryId: number
    isActive?: boolean
    Team?: TeamUncheckedCreateNestedManyWithoutGameCountryInput
  }

  export type GameCountryUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    game?: GameUpdateOneRequiredWithoutGameCountryNestedInput
    country?: CountryUpdateOneRequiredWithoutGameCountryNestedInput
    Team?: TeamUpdateManyWithoutGameCountryNestedInput
  }

  export type GameCountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    Team?: TeamUncheckedUpdateManyWithoutGameCountryNestedInput
  }

  export type GameCountryCreateManyInput = {
    id?: number
    gameId: number
    countryId: number
    isActive?: boolean
  }

  export type GameCountryUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameCountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SanctionsCreateInput = {
    team: TeamCreateNestedOneWithoutSanctionsInput
    sanctionedTeam: TeamCreateNestedOneWithoutIncomingSanctionsInput
  }

  export type SanctionsUncheckedCreateInput = {
    id?: number
    teamId: number
    sanctionedTeamId: number
  }

  export type SanctionsUpdateInput = {
    team?: TeamUpdateOneRequiredWithoutSanctionsNestedInput
    sanctionedTeam?: TeamUpdateOneRequiredWithoutIncomingSanctionsNestedInput
  }

  export type SanctionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    sanctionedTeamId?: IntFieldUpdateOperationsInput | number
  }

  export type SanctionsCreateManyInput = {
    id?: number
    teamId: number
    sanctionedTeamId: number
  }

  export type SanctionsUpdateManyMutationInput = {

  }

  export type SanctionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    sanctionedTeamId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GameNullableScalarRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    password?: SortOrder
    currentGameId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    currentGameId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    password?: SortOrder
    currentGameId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    password?: SortOrder
    currentGameId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    currentGameId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GameCityListRelationFilter = {
    every?: GameCityWhereInput
    some?: GameCityWhereInput
    none?: GameCityWhereInput
  }

  export type GameCountryListRelationFilter = {
    every?: GameCountryWhereInput
    some?: GameCountryWhereInput
    none?: GameCountryWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    ecologicalLevel?: SortOrder
    isActive?: SortOrder
    creatorId?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    ecologicalLevel?: SortOrder
    creatorId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    ecologicalLevel?: SortOrder
    isActive?: SortOrder
    creatorId?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    ecologicalLevel?: SortOrder
    isActive?: SortOrder
    creatorId?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    ecologicalLevel?: SortOrder
    creatorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GameCountryScalarRelationFilter = {
    is?: GameCountryWhereInput
    isNot?: GameCountryWhereInput
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type SanctionsListRelationFilter = {
    every?: SanctionsWhereInput
    some?: SanctionsWhereInput
    none?: SanctionsWhereInput
  }

  export type SanctionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    hasNuclearWeapons?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    hasNuclearWeapons?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    hasNuclearWeapons?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    bombsCount?: SortOrder
    money?: SortOrder
    gameCountryId?: SortOrder
    gameId?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type CityNameCountryIdCompoundUniqueInput = {
    name: string
    countryId: number
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type GameCityGameIdCityIdCompoundUniqueInput = {
    gameId: number
    cityId: number
  }

  export type GameCityCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
  }

  export type GameCityAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
  }

  export type GameCityMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
  }

  export type GameCityMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
  }

  export type GameCitySumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    cityId?: SortOrder
    protectionLevel?: SortOrder
    standartOfLiving?: SortOrder
    revenue?: SortOrder
    developmentLevel?: SortOrder
  }

  export type GameCountryGameIdCountryIdCompoundUniqueInput = {
    gameId: number
    countryId: number
  }

  export type GameCountryCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
    isActive?: SortOrder
  }

  export type GameCountryAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
  }

  export type GameCountryMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
    isActive?: SortOrder
  }

  export type GameCountryMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
    isActive?: SortOrder
  }

  export type GameCountrySumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    countryId?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type SanctionsTeamIdSanctionedTeamIdCompoundUniqueInput = {
    teamId: number
    sanctionedTeamId: number
  }

  export type SanctionsCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
  }

  export type SanctionsAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
  }

  export type SanctionsMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
  }

  export type SanctionsMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
  }

  export type SanctionsSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    sanctionedTeamId?: SortOrder
  }

  export type GameCreateNestedOneWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    connect?: GameWhereUniqueInput
  }

  export type GameCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GameCreateWithoutCreatorInput, GameUncheckedCreateWithoutCreatorInput> | GameCreateWithoutCreatorInput[] | GameUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCreatorInput | GameCreateOrConnectWithoutCreatorInput[]
    createMany?: GameCreateManyCreatorInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GameCreateWithoutCreatorInput, GameUncheckedCreateWithoutCreatorInput> | GameCreateWithoutCreatorInput[] | GameUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCreatorInput | GameCreateOrConnectWithoutCreatorInput[]
    createMany?: GameCreateManyCreatorInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GameUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput
    upsert?: GameUpsertWithoutPlayersInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutPlayersInput, GameUpdateWithoutPlayersInput>, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GameCreateWithoutCreatorInput, GameUncheckedCreateWithoutCreatorInput> | GameCreateWithoutCreatorInput[] | GameUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCreatorInput | GameCreateOrConnectWithoutCreatorInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutCreatorInput | GameUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GameCreateManyCreatorInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutCreatorInput | GameUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GameUpdateManyWithWhereWithoutCreatorInput | GameUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GameCreateWithoutCreatorInput, GameUncheckedCreateWithoutCreatorInput> | GameCreateWithoutCreatorInput[] | GameUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCreatorInput | GameCreateOrConnectWithoutCreatorInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutCreatorInput | GameUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GameCreateManyCreatorInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutCreatorInput | GameUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GameUpdateManyWithWhereWithoutCreatorInput | GameUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGamesCreatedInput = {
    create?: XOR<UserCreateWithoutGamesCreatedInput, UserUncheckedCreateWithoutGamesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCurrentGameInput = {
    create?: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput> | UserCreateWithoutCurrentGameInput[] | UserUncheckedCreateWithoutCurrentGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentGameInput | UserCreateOrConnectWithoutCurrentGameInput[]
    createMany?: UserCreateManyCurrentGameInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GameCityCreateNestedManyWithoutGameInput = {
    create?: XOR<GameCityCreateWithoutGameInput, GameCityUncheckedCreateWithoutGameInput> | GameCityCreateWithoutGameInput[] | GameCityUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutGameInput | GameCityCreateOrConnectWithoutGameInput[]
    createMany?: GameCityCreateManyGameInputEnvelope
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
  }

  export type GameCountryCreateNestedManyWithoutGameInput = {
    create?: XOR<GameCountryCreateWithoutGameInput, GameCountryUncheckedCreateWithoutGameInput> | GameCountryCreateWithoutGameInput[] | GameCountryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutGameInput | GameCountryCreateOrConnectWithoutGameInput[]
    createMany?: GameCountryCreateManyGameInputEnvelope
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutGameInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCurrentGameInput = {
    create?: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput> | UserCreateWithoutCurrentGameInput[] | UserUncheckedCreateWithoutCurrentGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentGameInput | UserCreateOrConnectWithoutCurrentGameInput[]
    createMany?: UserCreateManyCurrentGameInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GameCityUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameCityCreateWithoutGameInput, GameCityUncheckedCreateWithoutGameInput> | GameCityCreateWithoutGameInput[] | GameCityUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutGameInput | GameCityCreateOrConnectWithoutGameInput[]
    createMany?: GameCityCreateManyGameInputEnvelope
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
  }

  export type GameCountryUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GameCountryCreateWithoutGameInput, GameCountryUncheckedCreateWithoutGameInput> | GameCountryCreateWithoutGameInput[] | GameCountryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutGameInput | GameCountryCreateOrConnectWithoutGameInput[]
    createMany?: GameCountryCreateManyGameInputEnvelope
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutGamesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutGamesCreatedInput, UserUncheckedCreateWithoutGamesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesCreatedInput
    upsert?: UserUpsertWithoutGamesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesCreatedInput, UserUpdateWithoutGamesCreatedInput>, UserUncheckedUpdateWithoutGamesCreatedInput>
  }

  export type UserUpdateManyWithoutCurrentGameNestedInput = {
    create?: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput> | UserCreateWithoutCurrentGameInput[] | UserUncheckedCreateWithoutCurrentGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentGameInput | UserCreateOrConnectWithoutCurrentGameInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCurrentGameInput | UserUpsertWithWhereUniqueWithoutCurrentGameInput[]
    createMany?: UserCreateManyCurrentGameInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCurrentGameInput | UserUpdateWithWhereUniqueWithoutCurrentGameInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCurrentGameInput | UserUpdateManyWithWhereWithoutCurrentGameInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GameCityUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameCityCreateWithoutGameInput, GameCityUncheckedCreateWithoutGameInput> | GameCityCreateWithoutGameInput[] | GameCityUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutGameInput | GameCityCreateOrConnectWithoutGameInput[]
    upsert?: GameCityUpsertWithWhereUniqueWithoutGameInput | GameCityUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameCityCreateManyGameInputEnvelope
    set?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    disconnect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    delete?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    update?: GameCityUpdateWithWhereUniqueWithoutGameInput | GameCityUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameCityUpdateManyWithWhereWithoutGameInput | GameCityUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameCityScalarWhereInput | GameCityScalarWhereInput[]
  }

  export type GameCountryUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameCountryCreateWithoutGameInput, GameCountryUncheckedCreateWithoutGameInput> | GameCountryCreateWithoutGameInput[] | GameCountryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutGameInput | GameCountryCreateOrConnectWithoutGameInput[]
    upsert?: GameCountryUpsertWithWhereUniqueWithoutGameInput | GameCountryUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameCountryCreateManyGameInputEnvelope
    set?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    disconnect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    delete?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    update?: GameCountryUpdateWithWhereUniqueWithoutGameInput | GameCountryUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameCountryUpdateManyWithWhereWithoutGameInput | GameCountryUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameCountryScalarWhereInput | GameCountryScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutGameNestedInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGameInput | TeamUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGameInput | TeamUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGameInput | TeamUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCurrentGameNestedInput = {
    create?: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput> | UserCreateWithoutCurrentGameInput[] | UserUncheckedCreateWithoutCurrentGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentGameInput | UserCreateOrConnectWithoutCurrentGameInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCurrentGameInput | UserUpsertWithWhereUniqueWithoutCurrentGameInput[]
    createMany?: UserCreateManyCurrentGameInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCurrentGameInput | UserUpdateWithWhereUniqueWithoutCurrentGameInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCurrentGameInput | UserUpdateManyWithWhereWithoutCurrentGameInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GameCityUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameCityCreateWithoutGameInput, GameCityUncheckedCreateWithoutGameInput> | GameCityCreateWithoutGameInput[] | GameCityUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutGameInput | GameCityCreateOrConnectWithoutGameInput[]
    upsert?: GameCityUpsertWithWhereUniqueWithoutGameInput | GameCityUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameCityCreateManyGameInputEnvelope
    set?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    disconnect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    delete?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    update?: GameCityUpdateWithWhereUniqueWithoutGameInput | GameCityUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameCityUpdateManyWithWhereWithoutGameInput | GameCityUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameCityScalarWhereInput | GameCityScalarWhereInput[]
  }

  export type GameCountryUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GameCountryCreateWithoutGameInput, GameCountryUncheckedCreateWithoutGameInput> | GameCountryCreateWithoutGameInput[] | GameCountryUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutGameInput | GameCountryCreateOrConnectWithoutGameInput[]
    upsert?: GameCountryUpsertWithWhereUniqueWithoutGameInput | GameCountryUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: GameCountryCreateManyGameInputEnvelope
    set?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    disconnect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    delete?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    update?: GameCountryUpdateWithWhereUniqueWithoutGameInput | GameCountryUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GameCountryUpdateManyWithWhereWithoutGameInput | GameCountryUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GameCountryScalarWhereInput | GameCountryScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput> | TeamCreateWithoutGameInput[] | TeamUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameInput | TeamCreateOrConnectWithoutGameInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGameInput | TeamUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TeamCreateManyGameInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGameInput | TeamUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGameInput | TeamUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type GameCountryCreateNestedOneWithoutTeamInput = {
    create?: XOR<GameCountryCreateWithoutTeamInput, GameCountryUncheckedCreateWithoutTeamInput>
    connectOrCreate?: GameCountryCreateOrConnectWithoutTeamInput
    connect?: GameCountryWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutTeamInput = {
    create?: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamInput
    connect?: GameWhereUniqueInput
  }

  export type SanctionsCreateNestedManyWithoutTeamInput = {
    create?: XOR<SanctionsCreateWithoutTeamInput, SanctionsUncheckedCreateWithoutTeamInput> | SanctionsCreateWithoutTeamInput[] | SanctionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutTeamInput | SanctionsCreateOrConnectWithoutTeamInput[]
    createMany?: SanctionsCreateManyTeamInputEnvelope
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
  }

  export type SanctionsCreateNestedManyWithoutSanctionedTeamInput = {
    create?: XOR<SanctionsCreateWithoutSanctionedTeamInput, SanctionsUncheckedCreateWithoutSanctionedTeamInput> | SanctionsCreateWithoutSanctionedTeamInput[] | SanctionsUncheckedCreateWithoutSanctionedTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutSanctionedTeamInput | SanctionsCreateOrConnectWithoutSanctionedTeamInput[]
    createMany?: SanctionsCreateManySanctionedTeamInputEnvelope
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
  }

  export type SanctionsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<SanctionsCreateWithoutTeamInput, SanctionsUncheckedCreateWithoutTeamInput> | SanctionsCreateWithoutTeamInput[] | SanctionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutTeamInput | SanctionsCreateOrConnectWithoutTeamInput[]
    createMany?: SanctionsCreateManyTeamInputEnvelope
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
  }

  export type SanctionsUncheckedCreateNestedManyWithoutSanctionedTeamInput = {
    create?: XOR<SanctionsCreateWithoutSanctionedTeamInput, SanctionsUncheckedCreateWithoutSanctionedTeamInput> | SanctionsCreateWithoutSanctionedTeamInput[] | SanctionsUncheckedCreateWithoutSanctionedTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutSanctionedTeamInput | SanctionsCreateOrConnectWithoutSanctionedTeamInput[]
    createMany?: SanctionsCreateManySanctionedTeamInputEnvelope
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
  }

  export type GameCountryUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<GameCountryCreateWithoutTeamInput, GameCountryUncheckedCreateWithoutTeamInput>
    connectOrCreate?: GameCountryCreateOrConnectWithoutTeamInput
    upsert?: GameCountryUpsertWithoutTeamInput
    connect?: GameCountryWhereUniqueInput
    update?: XOR<XOR<GameCountryUpdateToOneWithWhereWithoutTeamInput, GameCountryUpdateWithoutTeamInput>, GameCountryUncheckedUpdateWithoutTeamInput>
  }

  export type GameUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamInput
    upsert?: GameUpsertWithoutTeamInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutTeamInput, GameUpdateWithoutTeamInput>, GameUncheckedUpdateWithoutTeamInput>
  }

  export type SanctionsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SanctionsCreateWithoutTeamInput, SanctionsUncheckedCreateWithoutTeamInput> | SanctionsCreateWithoutTeamInput[] | SanctionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutTeamInput | SanctionsCreateOrConnectWithoutTeamInput[]
    upsert?: SanctionsUpsertWithWhereUniqueWithoutTeamInput | SanctionsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SanctionsCreateManyTeamInputEnvelope
    set?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    disconnect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    delete?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    update?: SanctionsUpdateWithWhereUniqueWithoutTeamInput | SanctionsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SanctionsUpdateManyWithWhereWithoutTeamInput | SanctionsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SanctionsScalarWhereInput | SanctionsScalarWhereInput[]
  }

  export type SanctionsUpdateManyWithoutSanctionedTeamNestedInput = {
    create?: XOR<SanctionsCreateWithoutSanctionedTeamInput, SanctionsUncheckedCreateWithoutSanctionedTeamInput> | SanctionsCreateWithoutSanctionedTeamInput[] | SanctionsUncheckedCreateWithoutSanctionedTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutSanctionedTeamInput | SanctionsCreateOrConnectWithoutSanctionedTeamInput[]
    upsert?: SanctionsUpsertWithWhereUniqueWithoutSanctionedTeamInput | SanctionsUpsertWithWhereUniqueWithoutSanctionedTeamInput[]
    createMany?: SanctionsCreateManySanctionedTeamInputEnvelope
    set?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    disconnect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    delete?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    update?: SanctionsUpdateWithWhereUniqueWithoutSanctionedTeamInput | SanctionsUpdateWithWhereUniqueWithoutSanctionedTeamInput[]
    updateMany?: SanctionsUpdateManyWithWhereWithoutSanctionedTeamInput | SanctionsUpdateManyWithWhereWithoutSanctionedTeamInput[]
    deleteMany?: SanctionsScalarWhereInput | SanctionsScalarWhereInput[]
  }

  export type SanctionsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SanctionsCreateWithoutTeamInput, SanctionsUncheckedCreateWithoutTeamInput> | SanctionsCreateWithoutTeamInput[] | SanctionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutTeamInput | SanctionsCreateOrConnectWithoutTeamInput[]
    upsert?: SanctionsUpsertWithWhereUniqueWithoutTeamInput | SanctionsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SanctionsCreateManyTeamInputEnvelope
    set?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    disconnect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    delete?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    update?: SanctionsUpdateWithWhereUniqueWithoutTeamInput | SanctionsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SanctionsUpdateManyWithWhereWithoutTeamInput | SanctionsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SanctionsScalarWhereInput | SanctionsScalarWhereInput[]
  }

  export type SanctionsUncheckedUpdateManyWithoutSanctionedTeamNestedInput = {
    create?: XOR<SanctionsCreateWithoutSanctionedTeamInput, SanctionsUncheckedCreateWithoutSanctionedTeamInput> | SanctionsCreateWithoutSanctionedTeamInput[] | SanctionsUncheckedCreateWithoutSanctionedTeamInput[]
    connectOrCreate?: SanctionsCreateOrConnectWithoutSanctionedTeamInput | SanctionsCreateOrConnectWithoutSanctionedTeamInput[]
    upsert?: SanctionsUpsertWithWhereUniqueWithoutSanctionedTeamInput | SanctionsUpsertWithWhereUniqueWithoutSanctionedTeamInput[]
    createMany?: SanctionsCreateManySanctionedTeamInputEnvelope
    set?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    disconnect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    delete?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    connect?: SanctionsWhereUniqueInput | SanctionsWhereUniqueInput[]
    update?: SanctionsUpdateWithWhereUniqueWithoutSanctionedTeamInput | SanctionsUpdateWithWhereUniqueWithoutSanctionedTeamInput[]
    updateMany?: SanctionsUpdateManyWithWhereWithoutSanctionedTeamInput | SanctionsUpdateManyWithWhereWithoutSanctionedTeamInput[]
    deleteMany?: SanctionsScalarWhereInput | SanctionsScalarWhereInput[]
  }

  export type CityCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type GameCountryCreateNestedManyWithoutCountryInput = {
    create?: XOR<GameCountryCreateWithoutCountryInput, GameCountryUncheckedCreateWithoutCountryInput> | GameCountryCreateWithoutCountryInput[] | GameCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutCountryInput | GameCountryCreateOrConnectWithoutCountryInput[]
    createMany?: GameCountryCreateManyCountryInputEnvelope
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type GameCountryUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<GameCountryCreateWithoutCountryInput, GameCountryUncheckedCreateWithoutCountryInput> | GameCountryCreateWithoutCountryInput[] | GameCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutCountryInput | GameCountryCreateOrConnectWithoutCountryInput[]
    createMany?: GameCountryCreateManyCountryInputEnvelope
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
  }

  export type CityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type GameCountryUpdateManyWithoutCountryNestedInput = {
    create?: XOR<GameCountryCreateWithoutCountryInput, GameCountryUncheckedCreateWithoutCountryInput> | GameCountryCreateWithoutCountryInput[] | GameCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutCountryInput | GameCountryCreateOrConnectWithoutCountryInput[]
    upsert?: GameCountryUpsertWithWhereUniqueWithoutCountryInput | GameCountryUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: GameCountryCreateManyCountryInputEnvelope
    set?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    disconnect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    delete?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    update?: GameCountryUpdateWithWhereUniqueWithoutCountryInput | GameCountryUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: GameCountryUpdateManyWithWhereWithoutCountryInput | GameCountryUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: GameCountryScalarWhereInput | GameCountryScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type GameCountryUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<GameCountryCreateWithoutCountryInput, GameCountryUncheckedCreateWithoutCountryInput> | GameCountryCreateWithoutCountryInput[] | GameCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: GameCountryCreateOrConnectWithoutCountryInput | GameCountryCreateOrConnectWithoutCountryInput[]
    upsert?: GameCountryUpsertWithWhereUniqueWithoutCountryInput | GameCountryUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: GameCountryCreateManyCountryInputEnvelope
    set?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    disconnect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    delete?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    connect?: GameCountryWhereUniqueInput | GameCountryWhereUniqueInput[]
    update?: GameCountryUpdateWithWhereUniqueWithoutCountryInput | GameCountryUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: GameCountryUpdateManyWithWhereWithoutCountryInput | GameCountryUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: GameCountryScalarWhereInput | GameCountryScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutCityInput = {
    create?: XOR<CountryCreateWithoutCityInput, CountryUncheckedCreateWithoutCityInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCityInput
    connect?: CountryWhereUniqueInput
  }

  export type GameCityCreateNestedManyWithoutCityInput = {
    create?: XOR<GameCityCreateWithoutCityInput, GameCityUncheckedCreateWithoutCityInput> | GameCityCreateWithoutCityInput[] | GameCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutCityInput | GameCityCreateOrConnectWithoutCityInput[]
    createMany?: GameCityCreateManyCityInputEnvelope
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
  }

  export type GameCityUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<GameCityCreateWithoutCityInput, GameCityUncheckedCreateWithoutCityInput> | GameCityCreateWithoutCityInput[] | GameCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutCityInput | GameCityCreateOrConnectWithoutCityInput[]
    createMany?: GameCityCreateManyCityInputEnvelope
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutCityNestedInput = {
    create?: XOR<CountryCreateWithoutCityInput, CountryUncheckedCreateWithoutCityInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCityInput
    upsert?: CountryUpsertWithoutCityInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutCityInput, CountryUpdateWithoutCityInput>, CountryUncheckedUpdateWithoutCityInput>
  }

  export type GameCityUpdateManyWithoutCityNestedInput = {
    create?: XOR<GameCityCreateWithoutCityInput, GameCityUncheckedCreateWithoutCityInput> | GameCityCreateWithoutCityInput[] | GameCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutCityInput | GameCityCreateOrConnectWithoutCityInput[]
    upsert?: GameCityUpsertWithWhereUniqueWithoutCityInput | GameCityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: GameCityCreateManyCityInputEnvelope
    set?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    disconnect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    delete?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    update?: GameCityUpdateWithWhereUniqueWithoutCityInput | GameCityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: GameCityUpdateManyWithWhereWithoutCityInput | GameCityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: GameCityScalarWhereInput | GameCityScalarWhereInput[]
  }

  export type GameCityUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<GameCityCreateWithoutCityInput, GameCityUncheckedCreateWithoutCityInput> | GameCityCreateWithoutCityInput[] | GameCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: GameCityCreateOrConnectWithoutCityInput | GameCityCreateOrConnectWithoutCityInput[]
    upsert?: GameCityUpsertWithWhereUniqueWithoutCityInput | GameCityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: GameCityCreateManyCityInputEnvelope
    set?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    disconnect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    delete?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    connect?: GameCityWhereUniqueInput | GameCityWhereUniqueInput[]
    update?: GameCityUpdateWithWhereUniqueWithoutCityInput | GameCityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: GameCityUpdateManyWithWhereWithoutCityInput | GameCityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: GameCityScalarWhereInput | GameCityScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutGameCityInput = {
    create?: XOR<GameCreateWithoutGameCityInput, GameUncheckedCreateWithoutGameCityInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameCityInput
    connect?: GameWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutGameCityInput = {
    create?: XOR<CityCreateWithoutGameCityInput, CityUncheckedCreateWithoutGameCityInput>
    connectOrCreate?: CityCreateOrConnectWithoutGameCityInput
    connect?: CityWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutGameCityNestedInput = {
    create?: XOR<GameCreateWithoutGameCityInput, GameUncheckedCreateWithoutGameCityInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameCityInput
    upsert?: GameUpsertWithoutGameCityInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameCityInput, GameUpdateWithoutGameCityInput>, GameUncheckedUpdateWithoutGameCityInput>
  }

  export type CityUpdateOneRequiredWithoutGameCityNestedInput = {
    create?: XOR<CityCreateWithoutGameCityInput, CityUncheckedCreateWithoutGameCityInput>
    connectOrCreate?: CityCreateOrConnectWithoutGameCityInput
    upsert?: CityUpsertWithoutGameCityInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutGameCityInput, CityUpdateWithoutGameCityInput>, CityUncheckedUpdateWithoutGameCityInput>
  }

  export type GameCreateNestedOneWithoutGameCountryInput = {
    create?: XOR<GameCreateWithoutGameCountryInput, GameUncheckedCreateWithoutGameCountryInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameCountryInput
    connect?: GameWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutGameCountryInput = {
    create?: XOR<CountryCreateWithoutGameCountryInput, CountryUncheckedCreateWithoutGameCountryInput>
    connectOrCreate?: CountryCreateOrConnectWithoutGameCountryInput
    connect?: CountryWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutGameCountryInput = {
    create?: XOR<TeamCreateWithoutGameCountryInput, TeamUncheckedCreateWithoutGameCountryInput> | TeamCreateWithoutGameCountryInput[] | TeamUncheckedCreateWithoutGameCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameCountryInput | TeamCreateOrConnectWithoutGameCountryInput[]
    createMany?: TeamCreateManyGameCountryInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutGameCountryInput = {
    create?: XOR<TeamCreateWithoutGameCountryInput, TeamUncheckedCreateWithoutGameCountryInput> | TeamCreateWithoutGameCountryInput[] | TeamUncheckedCreateWithoutGameCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameCountryInput | TeamCreateOrConnectWithoutGameCountryInput[]
    createMany?: TeamCreateManyGameCountryInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type GameUpdateOneRequiredWithoutGameCountryNestedInput = {
    create?: XOR<GameCreateWithoutGameCountryInput, GameUncheckedCreateWithoutGameCountryInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameCountryInput
    upsert?: GameUpsertWithoutGameCountryInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameCountryInput, GameUpdateWithoutGameCountryInput>, GameUncheckedUpdateWithoutGameCountryInput>
  }

  export type CountryUpdateOneRequiredWithoutGameCountryNestedInput = {
    create?: XOR<CountryCreateWithoutGameCountryInput, CountryUncheckedCreateWithoutGameCountryInput>
    connectOrCreate?: CountryCreateOrConnectWithoutGameCountryInput
    upsert?: CountryUpsertWithoutGameCountryInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutGameCountryInput, CountryUpdateWithoutGameCountryInput>, CountryUncheckedUpdateWithoutGameCountryInput>
  }

  export type TeamUpdateManyWithoutGameCountryNestedInput = {
    create?: XOR<TeamCreateWithoutGameCountryInput, TeamUncheckedCreateWithoutGameCountryInput> | TeamCreateWithoutGameCountryInput[] | TeamUncheckedCreateWithoutGameCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameCountryInput | TeamCreateOrConnectWithoutGameCountryInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGameCountryInput | TeamUpsertWithWhereUniqueWithoutGameCountryInput[]
    createMany?: TeamCreateManyGameCountryInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGameCountryInput | TeamUpdateWithWhereUniqueWithoutGameCountryInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGameCountryInput | TeamUpdateManyWithWhereWithoutGameCountryInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutGameCountryNestedInput = {
    create?: XOR<TeamCreateWithoutGameCountryInput, TeamUncheckedCreateWithoutGameCountryInput> | TeamCreateWithoutGameCountryInput[] | TeamUncheckedCreateWithoutGameCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGameCountryInput | TeamCreateOrConnectWithoutGameCountryInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGameCountryInput | TeamUpsertWithWhereUniqueWithoutGameCountryInput[]
    createMany?: TeamCreateManyGameCountryInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGameCountryInput | TeamUpdateWithWhereUniqueWithoutGameCountryInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGameCountryInput | TeamUpdateManyWithWhereWithoutGameCountryInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutSanctionsInput = {
    create?: XOR<TeamCreateWithoutSanctionsInput, TeamUncheckedCreateWithoutSanctionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSanctionsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutIncomingSanctionsInput = {
    create?: XOR<TeamCreateWithoutIncomingSanctionsInput, TeamUncheckedCreateWithoutIncomingSanctionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutIncomingSanctionsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutSanctionsNestedInput = {
    create?: XOR<TeamCreateWithoutSanctionsInput, TeamUncheckedCreateWithoutSanctionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSanctionsInput
    upsert?: TeamUpsertWithoutSanctionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutSanctionsInput, TeamUpdateWithoutSanctionsInput>, TeamUncheckedUpdateWithoutSanctionsInput>
  }

  export type TeamUpdateOneRequiredWithoutIncomingSanctionsNestedInput = {
    create?: XOR<TeamCreateWithoutIncomingSanctionsInput, TeamUncheckedCreateWithoutIncomingSanctionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutIncomingSanctionsInput
    upsert?: TeamUpsertWithoutIncomingSanctionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutIncomingSanctionsInput, TeamUpdateWithoutIncomingSanctionsInput>, TeamUncheckedUpdateWithoutIncomingSanctionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GameCreateWithoutPlayersInput = {
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creator: UserCreateNestedOneWithoutGamesCreatedInput
    GameCity?: GameCityCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryCreateNestedManyWithoutGameInput
    Team?: TeamCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayersInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creatorId: number
    GameCity?: GameCityUncheckedCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutGameInput
    Team?: TeamUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type GameCreateWithoutCreatorInput = {
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    players?: UserCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryCreateNestedManyWithoutGameInput
    Team?: TeamCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    players?: UserUncheckedCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityUncheckedCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutGameInput
    Team?: TeamUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutCreatorInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCreatorInput, GameUncheckedCreateWithoutCreatorInput>
  }

  export type GameCreateManyCreatorInputEnvelope = {
    data: GameCreateManyCreatorInput | GameCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutPlayersInput = {
    update: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutPlayersInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateWithoutPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutGamesCreatedNestedInput
    GameCity?: GameCityUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUpdateManyWithoutGameNestedInput
    Team?: TeamUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    GameCity?: GameCityUncheckedUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUncheckedUpdateManyWithoutGameNestedInput
    Team?: TeamUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutCreatorInput, GameUncheckedUpdateWithoutCreatorInput>
    create: XOR<GameCreateWithoutCreatorInput, GameUncheckedCreateWithoutCreatorInput>
  }

  export type GameUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutCreatorInput, GameUncheckedUpdateWithoutCreatorInput>
  }

  export type GameUpdateManyWithWhereWithoutCreatorInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutCreatorInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    password?: StringFilter<"Game"> | string
    ecologicalLevel?: IntFilter<"Game"> | number
    isActive?: BoolFilter<"Game"> | boolean
    creatorId?: IntFilter<"Game"> | number
  }

  export type UserCreateWithoutGamesCreatedInput = {
    createdAt?: Date | string
    name?: string | null
    password: string
    CurrentGame?: GameCreateNestedOneWithoutPlayersInput
  }

  export type UserUncheckedCreateWithoutGamesCreatedInput = {
    id?: number
    createdAt?: Date | string
    name?: string | null
    password: string
    currentGameId?: number | null
  }

  export type UserCreateOrConnectWithoutGamesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesCreatedInput, UserUncheckedCreateWithoutGamesCreatedInput>
  }

  export type UserCreateWithoutCurrentGameInput = {
    createdAt?: Date | string
    name?: string | null
    password: string
    GamesCreated?: GameCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCurrentGameInput = {
    id?: number
    createdAt?: Date | string
    name?: string | null
    password: string
    GamesCreated?: GameUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCurrentGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput>
  }

  export type UserCreateManyCurrentGameInputEnvelope = {
    data: UserCreateManyCurrentGameInput | UserCreateManyCurrentGameInput[]
    skipDuplicates?: boolean
  }

  export type GameCityCreateWithoutGameInput = {
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
    city: CityCreateNestedOneWithoutGameCityInput
  }

  export type GameCityUncheckedCreateWithoutGameInput = {
    id?: number
    cityId: number
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
  }

  export type GameCityCreateOrConnectWithoutGameInput = {
    where: GameCityWhereUniqueInput
    create: XOR<GameCityCreateWithoutGameInput, GameCityUncheckedCreateWithoutGameInput>
  }

  export type GameCityCreateManyGameInputEnvelope = {
    data: GameCityCreateManyGameInput | GameCityCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type GameCountryCreateWithoutGameInput = {
    isActive?: boolean
    country: CountryCreateNestedOneWithoutGameCountryInput
    Team?: TeamCreateNestedManyWithoutGameCountryInput
  }

  export type GameCountryUncheckedCreateWithoutGameInput = {
    id?: number
    countryId: number
    isActive?: boolean
    Team?: TeamUncheckedCreateNestedManyWithoutGameCountryInput
  }

  export type GameCountryCreateOrConnectWithoutGameInput = {
    where: GameCountryWhereUniqueInput
    create: XOR<GameCountryCreateWithoutGameInput, GameCountryUncheckedCreateWithoutGameInput>
  }

  export type GameCountryCreateManyGameInputEnvelope = {
    data: GameCountryCreateManyGameInput | GameCountryCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutGameInput = {
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    GameCountry: GameCountryCreateNestedOneWithoutTeamInput
    Sanctions?: SanctionsCreateNestedManyWithoutTeamInput
    IncomingSanctions?: SanctionsCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamUncheckedCreateWithoutGameInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameCountryId: number
    Sanctions?: SanctionsUncheckedCreateNestedManyWithoutTeamInput
    IncomingSanctions?: SanctionsUncheckedCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamCreateOrConnectWithoutGameInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput>
  }

  export type TeamCreateManyGameInputEnvelope = {
    data: TeamCreateManyGameInput | TeamCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesCreatedInput = {
    update: XOR<UserUpdateWithoutGamesCreatedInput, UserUncheckedUpdateWithoutGamesCreatedInput>
    create: XOR<UserCreateWithoutGamesCreatedInput, UserUncheckedCreateWithoutGamesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesCreatedInput, UserUncheckedUpdateWithoutGamesCreatedInput>
  }

  export type UserUpdateWithoutGamesCreatedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    CurrentGame?: GameUpdateOneWithoutPlayersNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    currentGameId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutCurrentGameInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCurrentGameInput, UserUncheckedUpdateWithoutCurrentGameInput>
    create: XOR<UserCreateWithoutCurrentGameInput, UserUncheckedCreateWithoutCurrentGameInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCurrentGameInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCurrentGameInput, UserUncheckedUpdateWithoutCurrentGameInput>
  }

  export type UserUpdateManyWithWhereWithoutCurrentGameInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCurrentGameInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    currentGameId?: IntNullableFilter<"User"> | number | null
  }

  export type GameCityUpsertWithWhereUniqueWithoutGameInput = {
    where: GameCityWhereUniqueInput
    update: XOR<GameCityUpdateWithoutGameInput, GameCityUncheckedUpdateWithoutGameInput>
    create: XOR<GameCityCreateWithoutGameInput, GameCityUncheckedCreateWithoutGameInput>
  }

  export type GameCityUpdateWithWhereUniqueWithoutGameInput = {
    where: GameCityWhereUniqueInput
    data: XOR<GameCityUpdateWithoutGameInput, GameCityUncheckedUpdateWithoutGameInput>
  }

  export type GameCityUpdateManyWithWhereWithoutGameInput = {
    where: GameCityScalarWhereInput
    data: XOR<GameCityUpdateManyMutationInput, GameCityUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCityScalarWhereInput = {
    AND?: GameCityScalarWhereInput | GameCityScalarWhereInput[]
    OR?: GameCityScalarWhereInput[]
    NOT?: GameCityScalarWhereInput | GameCityScalarWhereInput[]
    id?: IntFilter<"GameCity"> | number
    gameId?: IntFilter<"GameCity"> | number
    cityId?: IntFilter<"GameCity"> | number
    protectionLevel?: IntFilter<"GameCity"> | number
    standartOfLiving?: IntFilter<"GameCity"> | number
    revenue?: IntFilter<"GameCity"> | number
    developmentLevel?: IntFilter<"GameCity"> | number
  }

  export type GameCountryUpsertWithWhereUniqueWithoutGameInput = {
    where: GameCountryWhereUniqueInput
    update: XOR<GameCountryUpdateWithoutGameInput, GameCountryUncheckedUpdateWithoutGameInput>
    create: XOR<GameCountryCreateWithoutGameInput, GameCountryUncheckedCreateWithoutGameInput>
  }

  export type GameCountryUpdateWithWhereUniqueWithoutGameInput = {
    where: GameCountryWhereUniqueInput
    data: XOR<GameCountryUpdateWithoutGameInput, GameCountryUncheckedUpdateWithoutGameInput>
  }

  export type GameCountryUpdateManyWithWhereWithoutGameInput = {
    where: GameCountryScalarWhereInput
    data: XOR<GameCountryUpdateManyMutationInput, GameCountryUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCountryScalarWhereInput = {
    AND?: GameCountryScalarWhereInput | GameCountryScalarWhereInput[]
    OR?: GameCountryScalarWhereInput[]
    NOT?: GameCountryScalarWhereInput | GameCountryScalarWhereInput[]
    id?: IntFilter<"GameCountry"> | number
    gameId?: IntFilter<"GameCountry"> | number
    countryId?: IntFilter<"GameCountry"> | number
    isActive?: BoolFilter<"GameCountry"> | boolean
  }

  export type TeamUpsertWithWhereUniqueWithoutGameInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutGameInput, TeamUncheckedUpdateWithoutGameInput>
    create: XOR<TeamCreateWithoutGameInput, TeamUncheckedCreateWithoutGameInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutGameInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutGameInput, TeamUncheckedUpdateWithoutGameInput>
  }

  export type TeamUpdateManyWithWhereWithoutGameInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutGameInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    hasNuclearWeapons?: BoolFilter<"Team"> | boolean
    bombsCount?: IntFilter<"Team"> | number
    money?: IntFilter<"Team"> | number
    gameCountryId?: IntFilter<"Team"> | number
    gameId?: IntFilter<"Team"> | number
  }

  export type GameCountryCreateWithoutTeamInput = {
    isActive?: boolean
    game: GameCreateNestedOneWithoutGameCountryInput
    country: CountryCreateNestedOneWithoutGameCountryInput
  }

  export type GameCountryUncheckedCreateWithoutTeamInput = {
    id?: number
    gameId: number
    countryId: number
    isActive?: boolean
  }

  export type GameCountryCreateOrConnectWithoutTeamInput = {
    where: GameCountryWhereUniqueInput
    create: XOR<GameCountryCreateWithoutTeamInput, GameCountryUncheckedCreateWithoutTeamInput>
  }

  export type GameCreateWithoutTeamInput = {
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creator: UserCreateNestedOneWithoutGamesCreatedInput
    players?: UserCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creatorId: number
    players?: UserUncheckedCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityUncheckedCreateNestedManyWithoutGameInput
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTeamInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
  }

  export type SanctionsCreateWithoutTeamInput = {
    sanctionedTeam: TeamCreateNestedOneWithoutIncomingSanctionsInput
  }

  export type SanctionsUncheckedCreateWithoutTeamInput = {
    id?: number
    sanctionedTeamId: number
  }

  export type SanctionsCreateOrConnectWithoutTeamInput = {
    where: SanctionsWhereUniqueInput
    create: XOR<SanctionsCreateWithoutTeamInput, SanctionsUncheckedCreateWithoutTeamInput>
  }

  export type SanctionsCreateManyTeamInputEnvelope = {
    data: SanctionsCreateManyTeamInput | SanctionsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type SanctionsCreateWithoutSanctionedTeamInput = {
    team: TeamCreateNestedOneWithoutSanctionsInput
  }

  export type SanctionsUncheckedCreateWithoutSanctionedTeamInput = {
    id?: number
    teamId: number
  }

  export type SanctionsCreateOrConnectWithoutSanctionedTeamInput = {
    where: SanctionsWhereUniqueInput
    create: XOR<SanctionsCreateWithoutSanctionedTeamInput, SanctionsUncheckedCreateWithoutSanctionedTeamInput>
  }

  export type SanctionsCreateManySanctionedTeamInputEnvelope = {
    data: SanctionsCreateManySanctionedTeamInput | SanctionsCreateManySanctionedTeamInput[]
    skipDuplicates?: boolean
  }

  export type GameCountryUpsertWithoutTeamInput = {
    update: XOR<GameCountryUpdateWithoutTeamInput, GameCountryUncheckedUpdateWithoutTeamInput>
    create: XOR<GameCountryCreateWithoutTeamInput, GameCountryUncheckedCreateWithoutTeamInput>
    where?: GameCountryWhereInput
  }

  export type GameCountryUpdateToOneWithWhereWithoutTeamInput = {
    where?: GameCountryWhereInput
    data: XOR<GameCountryUpdateWithoutTeamInput, GameCountryUncheckedUpdateWithoutTeamInput>
  }

  export type GameCountryUpdateWithoutTeamInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    game?: GameUpdateOneRequiredWithoutGameCountryNestedInput
    country?: CountryUpdateOneRequiredWithoutGameCountryNestedInput
  }

  export type GameCountryUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameUpsertWithoutTeamInput = {
    update: XOR<GameUpdateWithoutTeamInput, GameUncheckedUpdateWithoutTeamInput>
    create: XOR<GameCreateWithoutTeamInput, GameUncheckedCreateWithoutTeamInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutTeamInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutTeamInput, GameUncheckedUpdateWithoutTeamInput>
  }

  export type GameUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutGamesCreatedNestedInput
    players?: UserUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    players?: UserUncheckedUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUncheckedUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUncheckedUpdateManyWithoutGameNestedInput
  }

  export type SanctionsUpsertWithWhereUniqueWithoutTeamInput = {
    where: SanctionsWhereUniqueInput
    update: XOR<SanctionsUpdateWithoutTeamInput, SanctionsUncheckedUpdateWithoutTeamInput>
    create: XOR<SanctionsCreateWithoutTeamInput, SanctionsUncheckedCreateWithoutTeamInput>
  }

  export type SanctionsUpdateWithWhereUniqueWithoutTeamInput = {
    where: SanctionsWhereUniqueInput
    data: XOR<SanctionsUpdateWithoutTeamInput, SanctionsUncheckedUpdateWithoutTeamInput>
  }

  export type SanctionsUpdateManyWithWhereWithoutTeamInput = {
    where: SanctionsScalarWhereInput
    data: XOR<SanctionsUpdateManyMutationInput, SanctionsUncheckedUpdateManyWithoutTeamInput>
  }

  export type SanctionsScalarWhereInput = {
    AND?: SanctionsScalarWhereInput | SanctionsScalarWhereInput[]
    OR?: SanctionsScalarWhereInput[]
    NOT?: SanctionsScalarWhereInput | SanctionsScalarWhereInput[]
    id?: IntFilter<"Sanctions"> | number
    teamId?: IntFilter<"Sanctions"> | number
    sanctionedTeamId?: IntFilter<"Sanctions"> | number
  }

  export type SanctionsUpsertWithWhereUniqueWithoutSanctionedTeamInput = {
    where: SanctionsWhereUniqueInput
    update: XOR<SanctionsUpdateWithoutSanctionedTeamInput, SanctionsUncheckedUpdateWithoutSanctionedTeamInput>
    create: XOR<SanctionsCreateWithoutSanctionedTeamInput, SanctionsUncheckedCreateWithoutSanctionedTeamInput>
  }

  export type SanctionsUpdateWithWhereUniqueWithoutSanctionedTeamInput = {
    where: SanctionsWhereUniqueInput
    data: XOR<SanctionsUpdateWithoutSanctionedTeamInput, SanctionsUncheckedUpdateWithoutSanctionedTeamInput>
  }

  export type SanctionsUpdateManyWithWhereWithoutSanctionedTeamInput = {
    where: SanctionsScalarWhereInput
    data: XOR<SanctionsUpdateManyMutationInput, SanctionsUncheckedUpdateManyWithoutSanctionedTeamInput>
  }

  export type CityCreateWithoutCountryInput = {
    name: string
    GameCity?: GameCityCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    GameCity?: GameCityUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutCountryInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityCreateManyCountryInputEnvelope = {
    data: CityCreateManyCountryInput | CityCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type GameCountryCreateWithoutCountryInput = {
    isActive?: boolean
    game: GameCreateNestedOneWithoutGameCountryInput
    Team?: TeamCreateNestedManyWithoutGameCountryInput
  }

  export type GameCountryUncheckedCreateWithoutCountryInput = {
    id?: number
    gameId: number
    isActive?: boolean
    Team?: TeamUncheckedCreateNestedManyWithoutGameCountryInput
  }

  export type GameCountryCreateOrConnectWithoutCountryInput = {
    where: GameCountryWhereUniqueInput
    create: XOR<GameCountryCreateWithoutCountryInput, GameCountryUncheckedCreateWithoutCountryInput>
  }

  export type GameCountryCreateManyCountryInputEnvelope = {
    data: GameCountryCreateManyCountryInput | GameCountryCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityUpdateWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
  }

  export type CityUpdateManyWithWhereWithoutCountryInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutCountryInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    countryId?: IntFilter<"City"> | number
  }

  export type GameCountryUpsertWithWhereUniqueWithoutCountryInput = {
    where: GameCountryWhereUniqueInput
    update: XOR<GameCountryUpdateWithoutCountryInput, GameCountryUncheckedUpdateWithoutCountryInput>
    create: XOR<GameCountryCreateWithoutCountryInput, GameCountryUncheckedCreateWithoutCountryInput>
  }

  export type GameCountryUpdateWithWhereUniqueWithoutCountryInput = {
    where: GameCountryWhereUniqueInput
    data: XOR<GameCountryUpdateWithoutCountryInput, GameCountryUncheckedUpdateWithoutCountryInput>
  }

  export type GameCountryUpdateManyWithWhereWithoutCountryInput = {
    where: GameCountryScalarWhereInput
    data: XOR<GameCountryUpdateManyMutationInput, GameCountryUncheckedUpdateManyWithoutCountryInput>
  }

  export type CountryCreateWithoutCityInput = {
    name: string
    GameCountry?: GameCountryCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutCityInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCityInput, CountryUncheckedCreateWithoutCityInput>
  }

  export type GameCityCreateWithoutCityInput = {
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
    game: GameCreateNestedOneWithoutGameCityInput
  }

  export type GameCityUncheckedCreateWithoutCityInput = {
    id?: number
    gameId: number
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
  }

  export type GameCityCreateOrConnectWithoutCityInput = {
    where: GameCityWhereUniqueInput
    create: XOR<GameCityCreateWithoutCityInput, GameCityUncheckedCreateWithoutCityInput>
  }

  export type GameCityCreateManyCityInputEnvelope = {
    data: GameCityCreateManyCityInput | GameCityCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutCityInput = {
    update: XOR<CountryUpdateWithoutCityInput, CountryUncheckedUpdateWithoutCityInput>
    create: XOR<CountryCreateWithoutCityInput, CountryUncheckedCreateWithoutCityInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutCityInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutCityInput, CountryUncheckedUpdateWithoutCityInput>
  }

  export type CountryUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    GameCountry?: GameCountryUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    GameCountry?: GameCountryUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type GameCityUpsertWithWhereUniqueWithoutCityInput = {
    where: GameCityWhereUniqueInput
    update: XOR<GameCityUpdateWithoutCityInput, GameCityUncheckedUpdateWithoutCityInput>
    create: XOR<GameCityCreateWithoutCityInput, GameCityUncheckedCreateWithoutCityInput>
  }

  export type GameCityUpdateWithWhereUniqueWithoutCityInput = {
    where: GameCityWhereUniqueInput
    data: XOR<GameCityUpdateWithoutCityInput, GameCityUncheckedUpdateWithoutCityInput>
  }

  export type GameCityUpdateManyWithWhereWithoutCityInput = {
    where: GameCityScalarWhereInput
    data: XOR<GameCityUpdateManyMutationInput, GameCityUncheckedUpdateManyWithoutCityInput>
  }

  export type GameCreateWithoutGameCityInput = {
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creator: UserCreateNestedOneWithoutGamesCreatedInput
    players?: UserCreateNestedManyWithoutCurrentGameInput
    GameCountry?: GameCountryCreateNestedManyWithoutGameInput
    Team?: TeamCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameCityInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creatorId: number
    players?: UserUncheckedCreateNestedManyWithoutCurrentGameInput
    GameCountry?: GameCountryUncheckedCreateNestedManyWithoutGameInput
    Team?: TeamUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameCityInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameCityInput, GameUncheckedCreateWithoutGameCityInput>
  }

  export type CityCreateWithoutGameCityInput = {
    name: string
    country: CountryCreateNestedOneWithoutCityInput
  }

  export type CityUncheckedCreateWithoutGameCityInput = {
    id?: number
    name: string
    countryId: number
  }

  export type CityCreateOrConnectWithoutGameCityInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutGameCityInput, CityUncheckedCreateWithoutGameCityInput>
  }

  export type GameUpsertWithoutGameCityInput = {
    update: XOR<GameUpdateWithoutGameCityInput, GameUncheckedUpdateWithoutGameCityInput>
    create: XOR<GameCreateWithoutGameCityInput, GameUncheckedCreateWithoutGameCityInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameCityInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameCityInput, GameUncheckedUpdateWithoutGameCityInput>
  }

  export type GameUpdateWithoutGameCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutGamesCreatedNestedInput
    players?: UserUpdateManyWithoutCurrentGameNestedInput
    GameCountry?: GameCountryUpdateManyWithoutGameNestedInput
    Team?: TeamUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    players?: UserUncheckedUpdateManyWithoutCurrentGameNestedInput
    GameCountry?: GameCountryUncheckedUpdateManyWithoutGameNestedInput
    Team?: TeamUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CityUpsertWithoutGameCityInput = {
    update: XOR<CityUpdateWithoutGameCityInput, CityUncheckedUpdateWithoutGameCityInput>
    create: XOR<CityCreateWithoutGameCityInput, CityUncheckedCreateWithoutGameCityInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutGameCityInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutGameCityInput, CityUncheckedUpdateWithoutGameCityInput>
  }

  export type CityUpdateWithoutGameCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutGameCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateWithoutGameCountryInput = {
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creator: UserCreateNestedOneWithoutGamesCreatedInput
    players?: UserCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityCreateNestedManyWithoutGameInput
    Team?: TeamCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameCountryInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
    creatorId: number
    players?: UserUncheckedCreateNestedManyWithoutCurrentGameInput
    GameCity?: GameCityUncheckedCreateNestedManyWithoutGameInput
    Team?: TeamUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameCountryInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameCountryInput, GameUncheckedCreateWithoutGameCountryInput>
  }

  export type CountryCreateWithoutGameCountryInput = {
    name: string
    City?: CityCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutGameCountryInput = {
    id?: number
    name: string
    City?: CityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutGameCountryInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutGameCountryInput, CountryUncheckedCreateWithoutGameCountryInput>
  }

  export type TeamCreateWithoutGameCountryInput = {
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    Game: GameCreateNestedOneWithoutTeamInput
    Sanctions?: SanctionsCreateNestedManyWithoutTeamInput
    IncomingSanctions?: SanctionsCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamUncheckedCreateWithoutGameCountryInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameId: number
    Sanctions?: SanctionsUncheckedCreateNestedManyWithoutTeamInput
    IncomingSanctions?: SanctionsUncheckedCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamCreateOrConnectWithoutGameCountryInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGameCountryInput, TeamUncheckedCreateWithoutGameCountryInput>
  }

  export type TeamCreateManyGameCountryInputEnvelope = {
    data: TeamCreateManyGameCountryInput | TeamCreateManyGameCountryInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutGameCountryInput = {
    update: XOR<GameUpdateWithoutGameCountryInput, GameUncheckedUpdateWithoutGameCountryInput>
    create: XOR<GameCreateWithoutGameCountryInput, GameUncheckedCreateWithoutGameCountryInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameCountryInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameCountryInput, GameUncheckedUpdateWithoutGameCountryInput>
  }

  export type GameUpdateWithoutGameCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creator?: UserUpdateOneRequiredWithoutGamesCreatedNestedInput
    players?: UserUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUpdateManyWithoutGameNestedInput
    Team?: TeamUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: IntFieldUpdateOperationsInput | number
    players?: UserUncheckedUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUncheckedUpdateManyWithoutGameNestedInput
    Team?: TeamUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CountryUpsertWithoutGameCountryInput = {
    update: XOR<CountryUpdateWithoutGameCountryInput, CountryUncheckedUpdateWithoutGameCountryInput>
    create: XOR<CountryCreateWithoutGameCountryInput, CountryUncheckedCreateWithoutGameCountryInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutGameCountryInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutGameCountryInput, CountryUncheckedUpdateWithoutGameCountryInput>
  }

  export type CountryUpdateWithoutGameCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    City?: CityUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutGameCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    City?: CityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type TeamUpsertWithWhereUniqueWithoutGameCountryInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutGameCountryInput, TeamUncheckedUpdateWithoutGameCountryInput>
    create: XOR<TeamCreateWithoutGameCountryInput, TeamUncheckedCreateWithoutGameCountryInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutGameCountryInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutGameCountryInput, TeamUncheckedUpdateWithoutGameCountryInput>
  }

  export type TeamUpdateManyWithWhereWithoutGameCountryInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutGameCountryInput>
  }

  export type TeamCreateWithoutSanctionsInput = {
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    GameCountry: GameCountryCreateNestedOneWithoutTeamInput
    Game: GameCreateNestedOneWithoutTeamInput
    IncomingSanctions?: SanctionsCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamUncheckedCreateWithoutSanctionsInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameCountryId: number
    gameId: number
    IncomingSanctions?: SanctionsUncheckedCreateNestedManyWithoutSanctionedTeamInput
  }

  export type TeamCreateOrConnectWithoutSanctionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSanctionsInput, TeamUncheckedCreateWithoutSanctionsInput>
  }

  export type TeamCreateWithoutIncomingSanctionsInput = {
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    GameCountry: GameCountryCreateNestedOneWithoutTeamInput
    Game: GameCreateNestedOneWithoutTeamInput
    Sanctions?: SanctionsCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutIncomingSanctionsInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameCountryId: number
    gameId: number
    Sanctions?: SanctionsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutIncomingSanctionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutIncomingSanctionsInput, TeamUncheckedCreateWithoutIncomingSanctionsInput>
  }

  export type TeamUpsertWithoutSanctionsInput = {
    update: XOR<TeamUpdateWithoutSanctionsInput, TeamUncheckedUpdateWithoutSanctionsInput>
    create: XOR<TeamCreateWithoutSanctionsInput, TeamUncheckedCreateWithoutSanctionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutSanctionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutSanctionsInput, TeamUncheckedUpdateWithoutSanctionsInput>
  }

  export type TeamUpdateWithoutSanctionsInput = {
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    GameCountry?: GameCountryUpdateOneRequiredWithoutTeamNestedInput
    Game?: GameUpdateOneRequiredWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSanctionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameCountryId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    IncomingSanctions?: SanctionsUncheckedUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUpsertWithoutIncomingSanctionsInput = {
    update: XOR<TeamUpdateWithoutIncomingSanctionsInput, TeamUncheckedUpdateWithoutIncomingSanctionsInput>
    create: XOR<TeamCreateWithoutIncomingSanctionsInput, TeamUncheckedCreateWithoutIncomingSanctionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutIncomingSanctionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutIncomingSanctionsInput, TeamUncheckedUpdateWithoutIncomingSanctionsInput>
  }

  export type TeamUpdateWithoutIncomingSanctionsInput = {
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    GameCountry?: GameCountryUpdateOneRequiredWithoutTeamNestedInput
    Game?: GameUpdateOneRequiredWithoutTeamNestedInput
    Sanctions?: SanctionsUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutIncomingSanctionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameCountryId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    Sanctions?: SanctionsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type GameCreateManyCreatorInput = {
    id?: number
    name: string
    password: string
    ecologicalLevel?: number
    isActive?: boolean
  }

  export type GameUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    players?: UserUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUpdateManyWithoutGameNestedInput
    Team?: TeamUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    players?: UserUncheckedUpdateManyWithoutCurrentGameNestedInput
    GameCity?: GameCityUncheckedUpdateManyWithoutGameNestedInput
    GameCountry?: GameCountryUncheckedUpdateManyWithoutGameNestedInput
    Team?: TeamUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ecologicalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyCurrentGameInput = {
    id?: number
    createdAt?: Date | string
    name?: string | null
    password: string
  }

  export type GameCityCreateManyGameInput = {
    id?: number
    cityId: number
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
  }

  export type GameCountryCreateManyGameInput = {
    id?: number
    countryId: number
    isActive?: boolean
  }

  export type TeamCreateManyGameInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameCountryId: number
  }

  export type UserUpdateWithoutCurrentGameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    GamesCreated?: GameUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCurrentGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    GamesCreated?: GameUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCurrentGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GameCityUpdateWithoutGameInput = {
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
    city?: CityUpdateOneRequiredWithoutGameCityNestedInput
  }

  export type GameCityUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type GameCityUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type GameCountryUpdateWithoutGameInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: CountryUpdateOneRequiredWithoutGameCountryNestedInput
    Team?: TeamUpdateManyWithoutGameCountryNestedInput
  }

  export type GameCountryUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    Team?: TeamUncheckedUpdateManyWithoutGameCountryNestedInput
  }

  export type GameCountryUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeamUpdateWithoutGameInput = {
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    GameCountry?: GameCountryUpdateOneRequiredWithoutTeamNestedInput
    Sanctions?: SanctionsUpdateManyWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameCountryId?: IntFieldUpdateOperationsInput | number
    Sanctions?: SanctionsUncheckedUpdateManyWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUncheckedUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameCountryId?: IntFieldUpdateOperationsInput | number
  }

  export type SanctionsCreateManyTeamInput = {
    id?: number
    sanctionedTeamId: number
  }

  export type SanctionsCreateManySanctionedTeamInput = {
    id?: number
    teamId: number
  }

  export type SanctionsUpdateWithoutTeamInput = {
    sanctionedTeam?: TeamUpdateOneRequiredWithoutIncomingSanctionsNestedInput
  }

  export type SanctionsUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    sanctionedTeamId?: IntFieldUpdateOperationsInput | number
  }

  export type SanctionsUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    sanctionedTeamId?: IntFieldUpdateOperationsInput | number
  }

  export type SanctionsUpdateWithoutSanctionedTeamInput = {
    team?: TeamUpdateOneRequiredWithoutSanctionsNestedInput
  }

  export type SanctionsUncheckedUpdateWithoutSanctionedTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type SanctionsUncheckedUpdateManyWithoutSanctionedTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type CityCreateManyCountryInput = {
    id?: number
    name: string
  }

  export type GameCountryCreateManyCountryInput = {
    id?: number
    gameId: number
    isActive?: boolean
  }

  export type CityUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    GameCity?: GameCityUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    GameCity?: GameCityUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameCountryUpdateWithoutCountryInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    game?: GameUpdateOneRequiredWithoutGameCountryNestedInput
    Team?: TeamUpdateManyWithoutGameCountryNestedInput
  }

  export type GameCountryUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    Team?: TeamUncheckedUpdateManyWithoutGameCountryNestedInput
  }

  export type GameCountryUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameCityCreateManyCityInput = {
    id?: number
    gameId: number
    protectionLevel?: number
    standartOfLiving?: number
    revenue?: number
    developmentLevel?: number
  }

  export type GameCityUpdateWithoutCityInput = {
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutGameCityNestedInput
  }

  export type GameCityUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type GameCityUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    protectionLevel?: IntFieldUpdateOperationsInput | number
    standartOfLiving?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    developmentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type TeamCreateManyGameCountryInput = {
    id?: number
    hasNuclearWeapons?: boolean
    bombsCount?: number
    money?: number
    gameId: number
  }

  export type TeamUpdateWithoutGameCountryInput = {
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateOneRequiredWithoutTeamNestedInput
    Sanctions?: SanctionsUpdateManyWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutGameCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    Sanctions?: SanctionsUncheckedUpdateManyWithoutTeamNestedInput
    IncomingSanctions?: SanctionsUncheckedUpdateManyWithoutSanctionedTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutGameCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    hasNuclearWeapons?: BoolFieldUpdateOperationsInput | boolean
    bombsCount?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}