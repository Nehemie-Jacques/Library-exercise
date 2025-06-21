
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
 * Model Emprunts
 * 
 */
export type Emprunts = $Result.DefaultSelection<Prisma.$EmpruntsPayload>
/**
 * Model Livres
 * 
 */
export type Livres = $Result.DefaultSelection<Prisma.$LivresPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.emprunts`: Exposes CRUD operations for the **Emprunts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprunts
    * const emprunts = await prisma.emprunts.findMany()
    * ```
    */
  get emprunts(): Prisma.EmpruntsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livres`: Exposes CRUD operations for the **Livres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livres
    * const livres = await prisma.livres.findMany()
    * ```
    */
  get livres(): Prisma.LivresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Emprunts: 'Emprunts',
    Livres: 'Livres',
    Notifications: 'Notifications'
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
      modelProps: "user" | "emprunts" | "livres" | "notifications"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Emprunts: {
        payload: Prisma.$EmpruntsPayload<ExtArgs>
        fields: Prisma.EmpruntsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpruntsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpruntsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>
          }
          findFirst: {
            args: Prisma.EmpruntsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpruntsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>
          }
          findMany: {
            args: Prisma.EmpruntsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>[]
          }
          create: {
            args: Prisma.EmpruntsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>
          }
          createMany: {
            args: Prisma.EmpruntsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpruntsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>
          }
          update: {
            args: Prisma.EmpruntsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>
          }
          deleteMany: {
            args: Prisma.EmpruntsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpruntsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpruntsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpruntsPayload>
          }
          aggregate: {
            args: Prisma.EmpruntsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprunts>
          }
          groupBy: {
            args: Prisma.EmpruntsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpruntsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmpruntsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmpruntsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmpruntsCountArgs<ExtArgs>
            result: $Utils.Optional<EmpruntsCountAggregateOutputType> | number
          }
        }
      }
      Livres: {
        payload: Prisma.$LivresPayload<ExtArgs>
        fields: Prisma.LivresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>
          }
          findFirst: {
            args: Prisma.LivresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>
          }
          findMany: {
            args: Prisma.LivresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>[]
          }
          create: {
            args: Prisma.LivresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>
          }
          createMany: {
            args: Prisma.LivresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LivresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>
          }
          update: {
            args: Prisma.LivresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>
          }
          deleteMany: {
            args: Prisma.LivresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LivresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivresPayload>
          }
          aggregate: {
            args: Prisma.LivresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivres>
          }
          groupBy: {
            args: Prisma.LivresGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivresGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LivresFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LivresAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LivresCountArgs<ExtArgs>
            result: $Utils.Optional<LivresCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    emprunts?: EmpruntsOmit
    livres?: LivresOmit
    notifications?: NotificationsOmit
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    userID: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    userID: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    userID: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userID?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userID?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    userID?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    userID: string
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    userID?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    userID?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "userID", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      userID: string
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userID: FieldRef<"User", 'String'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
  }


  /**
   * Model Emprunts
   */

  export type AggregateEmprunts = {
    _count: EmpruntsCountAggregateOutputType | null
    _min: EmpruntsMinAggregateOutputType | null
    _max: EmpruntsMaxAggregateOutputType | null
  }

  export type EmpruntsMinAggregateOutputType = {
    id: string | null
    empruntID: string | null
    livreID: string | null
    userID: string | null
    dateEmprunt: Date | null
    dateRetour: Date | null
  }

  export type EmpruntsMaxAggregateOutputType = {
    id: string | null
    empruntID: string | null
    livreID: string | null
    userID: string | null
    dateEmprunt: Date | null
    dateRetour: Date | null
  }

  export type EmpruntsCountAggregateOutputType = {
    id: number
    empruntID: number
    livreID: number
    userID: number
    dateEmprunt: number
    dateRetour: number
    _all: number
  }


  export type EmpruntsMinAggregateInputType = {
    id?: true
    empruntID?: true
    livreID?: true
    userID?: true
    dateEmprunt?: true
    dateRetour?: true
  }

  export type EmpruntsMaxAggregateInputType = {
    id?: true
    empruntID?: true
    livreID?: true
    userID?: true
    dateEmprunt?: true
    dateRetour?: true
  }

  export type EmpruntsCountAggregateInputType = {
    id?: true
    empruntID?: true
    livreID?: true
    userID?: true
    dateEmprunt?: true
    dateRetour?: true
    _all?: true
  }

  export type EmpruntsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprunts to aggregate.
     */
    where?: EmpruntsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntsOrderByWithRelationInput | EmpruntsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpruntsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprunts
    **/
    _count?: true | EmpruntsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpruntsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpruntsMaxAggregateInputType
  }

  export type GetEmpruntsAggregateType<T extends EmpruntsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprunts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprunts[P]>
      : GetScalarType<T[P], AggregateEmprunts[P]>
  }




  export type EmpruntsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpruntsWhereInput
    orderBy?: EmpruntsOrderByWithAggregationInput | EmpruntsOrderByWithAggregationInput[]
    by: EmpruntsScalarFieldEnum[] | EmpruntsScalarFieldEnum
    having?: EmpruntsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpruntsCountAggregateInputType | true
    _min?: EmpruntsMinAggregateInputType
    _max?: EmpruntsMaxAggregateInputType
  }

  export type EmpruntsGroupByOutputType = {
    id: string
    empruntID: string
    livreID: string
    userID: string
    dateEmprunt: Date
    dateRetour: Date
    _count: EmpruntsCountAggregateOutputType | null
    _min: EmpruntsMinAggregateOutputType | null
    _max: EmpruntsMaxAggregateOutputType | null
  }

  type GetEmpruntsGroupByPayload<T extends EmpruntsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpruntsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpruntsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpruntsGroupByOutputType[P]>
            : GetScalarType<T[P], EmpruntsGroupByOutputType[P]>
        }
      >
    >


  export type EmpruntsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empruntID?: boolean
    livreID?: boolean
    userID?: boolean
    dateEmprunt?: boolean
    dateRetour?: boolean
  }, ExtArgs["result"]["emprunts"]>



  export type EmpruntsSelectScalar = {
    id?: boolean
    empruntID?: boolean
    livreID?: boolean
    userID?: boolean
    dateEmprunt?: boolean
    dateRetour?: boolean
  }

  export type EmpruntsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empruntID" | "livreID" | "userID" | "dateEmprunt" | "dateRetour", ExtArgs["result"]["emprunts"]>

  export type $EmpruntsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprunts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empruntID: string
      livreID: string
      userID: string
      dateEmprunt: Date
      dateRetour: Date
    }, ExtArgs["result"]["emprunts"]>
    composites: {}
  }

  type EmpruntsGetPayload<S extends boolean | null | undefined | EmpruntsDefaultArgs> = $Result.GetResult<Prisma.$EmpruntsPayload, S>

  type EmpruntsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpruntsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpruntsCountAggregateInputType | true
    }

  export interface EmpruntsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprunts'], meta: { name: 'Emprunts' } }
    /**
     * Find zero or one Emprunts that matches the filter.
     * @param {EmpruntsFindUniqueArgs} args - Arguments to find a Emprunts
     * @example
     * // Get one Emprunts
     * const emprunts = await prisma.emprunts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpruntsFindUniqueArgs>(args: SelectSubset<T, EmpruntsFindUniqueArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprunts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpruntsFindUniqueOrThrowArgs} args - Arguments to find a Emprunts
     * @example
     * // Get one Emprunts
     * const emprunts = await prisma.emprunts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpruntsFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpruntsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprunts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsFindFirstArgs} args - Arguments to find a Emprunts
     * @example
     * // Get one Emprunts
     * const emprunts = await prisma.emprunts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpruntsFindFirstArgs>(args?: SelectSubset<T, EmpruntsFindFirstArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprunts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsFindFirstOrThrowArgs} args - Arguments to find a Emprunts
     * @example
     * // Get one Emprunts
     * const emprunts = await prisma.emprunts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpruntsFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpruntsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprunts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprunts
     * const emprunts = await prisma.emprunts.findMany()
     * 
     * // Get first 10 Emprunts
     * const emprunts = await prisma.emprunts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empruntsWithIdOnly = await prisma.emprunts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpruntsFindManyArgs>(args?: SelectSubset<T, EmpruntsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprunts.
     * @param {EmpruntsCreateArgs} args - Arguments to create a Emprunts.
     * @example
     * // Create one Emprunts
     * const Emprunts = await prisma.emprunts.create({
     *   data: {
     *     // ... data to create a Emprunts
     *   }
     * })
     * 
     */
    create<T extends EmpruntsCreateArgs>(args: SelectSubset<T, EmpruntsCreateArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprunts.
     * @param {EmpruntsCreateManyArgs} args - Arguments to create many Emprunts.
     * @example
     * // Create many Emprunts
     * const emprunts = await prisma.emprunts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpruntsCreateManyArgs>(args?: SelectSubset<T, EmpruntsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emprunts.
     * @param {EmpruntsDeleteArgs} args - Arguments to delete one Emprunts.
     * @example
     * // Delete one Emprunts
     * const Emprunts = await prisma.emprunts.delete({
     *   where: {
     *     // ... filter to delete one Emprunts
     *   }
     * })
     * 
     */
    delete<T extends EmpruntsDeleteArgs>(args: SelectSubset<T, EmpruntsDeleteArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprunts.
     * @param {EmpruntsUpdateArgs} args - Arguments to update one Emprunts.
     * @example
     * // Update one Emprunts
     * const emprunts = await prisma.emprunts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpruntsUpdateArgs>(args: SelectSubset<T, EmpruntsUpdateArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprunts.
     * @param {EmpruntsDeleteManyArgs} args - Arguments to filter Emprunts to delete.
     * @example
     * // Delete a few Emprunts
     * const { count } = await prisma.emprunts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpruntsDeleteManyArgs>(args?: SelectSubset<T, EmpruntsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprunts
     * const emprunts = await prisma.emprunts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpruntsUpdateManyArgs>(args: SelectSubset<T, EmpruntsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emprunts.
     * @param {EmpruntsUpsertArgs} args - Arguments to update or create a Emprunts.
     * @example
     * // Update or create a Emprunts
     * const emprunts = await prisma.emprunts.upsert({
     *   create: {
     *     // ... data to create a Emprunts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprunts we want to update
     *   }
     * })
     */
    upsert<T extends EmpruntsUpsertArgs>(args: SelectSubset<T, EmpruntsUpsertArgs<ExtArgs>>): Prisma__EmpruntsClient<$Result.GetResult<Prisma.$EmpruntsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprunts that matches the filter.
     * @param {EmpruntsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const emprunts = await prisma.emprunts.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EmpruntsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Emprunts.
     * @param {EmpruntsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const emprunts = await prisma.emprunts.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmpruntsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsCountArgs} args - Arguments to filter Emprunts to count.
     * @example
     * // Count the number of Emprunts
     * const count = await prisma.emprunts.count({
     *   where: {
     *     // ... the filter for the Emprunts we want to count
     *   }
     * })
    **/
    count<T extends EmpruntsCountArgs>(
      args?: Subset<T, EmpruntsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpruntsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpruntsAggregateArgs>(args: Subset<T, EmpruntsAggregateArgs>): Prisma.PrismaPromise<GetEmpruntsAggregateType<T>>

    /**
     * Group by Emprunts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpruntsGroupByArgs} args - Group by arguments.
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
      T extends EmpruntsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpruntsGroupByArgs['orderBy'] }
        : { orderBy?: EmpruntsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpruntsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpruntsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprunts model
   */
  readonly fields: EmpruntsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprunts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpruntsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Emprunts model
   */
  interface EmpruntsFieldRefs {
    readonly id: FieldRef<"Emprunts", 'String'>
    readonly empruntID: FieldRef<"Emprunts", 'String'>
    readonly livreID: FieldRef<"Emprunts", 'String'>
    readonly userID: FieldRef<"Emprunts", 'String'>
    readonly dateEmprunt: FieldRef<"Emprunts", 'DateTime'>
    readonly dateRetour: FieldRef<"Emprunts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Emprunts findUnique
   */
  export type EmpruntsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where: EmpruntsWhereUniqueInput
  }

  /**
   * Emprunts findUniqueOrThrow
   */
  export type EmpruntsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where: EmpruntsWhereUniqueInput
  }

  /**
   * Emprunts findFirst
   */
  export type EmpruntsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where?: EmpruntsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntsOrderByWithRelationInput | EmpruntsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprunts.
     */
    cursor?: EmpruntsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprunts.
     */
    distinct?: EmpruntsScalarFieldEnum | EmpruntsScalarFieldEnum[]
  }

  /**
   * Emprunts findFirstOrThrow
   */
  export type EmpruntsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where?: EmpruntsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntsOrderByWithRelationInput | EmpruntsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprunts.
     */
    cursor?: EmpruntsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprunts.
     */
    distinct?: EmpruntsScalarFieldEnum | EmpruntsScalarFieldEnum[]
  }

  /**
   * Emprunts findMany
   */
  export type EmpruntsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * Filter, which Emprunts to fetch.
     */
    where?: EmpruntsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprunts to fetch.
     */
    orderBy?: EmpruntsOrderByWithRelationInput | EmpruntsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprunts.
     */
    cursor?: EmpruntsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprunts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprunts.
     */
    skip?: number
    distinct?: EmpruntsScalarFieldEnum | EmpruntsScalarFieldEnum[]
  }

  /**
   * Emprunts create
   */
  export type EmpruntsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * The data needed to create a Emprunts.
     */
    data: XOR<EmpruntsCreateInput, EmpruntsUncheckedCreateInput>
  }

  /**
   * Emprunts createMany
   */
  export type EmpruntsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprunts.
     */
    data: EmpruntsCreateManyInput | EmpruntsCreateManyInput[]
  }

  /**
   * Emprunts update
   */
  export type EmpruntsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * The data needed to update a Emprunts.
     */
    data: XOR<EmpruntsUpdateInput, EmpruntsUncheckedUpdateInput>
    /**
     * Choose, which Emprunts to update.
     */
    where: EmpruntsWhereUniqueInput
  }

  /**
   * Emprunts updateMany
   */
  export type EmpruntsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprunts.
     */
    data: XOR<EmpruntsUpdateManyMutationInput, EmpruntsUncheckedUpdateManyInput>
    /**
     * Filter which Emprunts to update
     */
    where?: EmpruntsWhereInput
    /**
     * Limit how many Emprunts to update.
     */
    limit?: number
  }

  /**
   * Emprunts upsert
   */
  export type EmpruntsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * The filter to search for the Emprunts to update in case it exists.
     */
    where: EmpruntsWhereUniqueInput
    /**
     * In case the Emprunts found by the `where` argument doesn't exist, create a new Emprunts with this data.
     */
    create: XOR<EmpruntsCreateInput, EmpruntsUncheckedCreateInput>
    /**
     * In case the Emprunts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpruntsUpdateInput, EmpruntsUncheckedUpdateInput>
  }

  /**
   * Emprunts delete
   */
  export type EmpruntsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
    /**
     * Filter which Emprunts to delete.
     */
    where: EmpruntsWhereUniqueInput
  }

  /**
   * Emprunts deleteMany
   */
  export type EmpruntsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprunts to delete
     */
    where?: EmpruntsWhereInput
    /**
     * Limit how many Emprunts to delete.
     */
    limit?: number
  }

  /**
   * Emprunts findRaw
   */
  export type EmpruntsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Emprunts aggregateRaw
   */
  export type EmpruntsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Emprunts without action
   */
  export type EmpruntsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprunts
     */
    select?: EmpruntsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprunts
     */
    omit?: EmpruntsOmit<ExtArgs> | null
  }


  /**
   * Model Livres
   */

  export type AggregateLivres = {
    _count: LivresCountAggregateOutputType | null
    _avg: LivresAvgAggregateOutputType | null
    _sum: LivresSumAggregateOutputType | null
    _min: LivresMinAggregateOutputType | null
    _max: LivresMaxAggregateOutputType | null
  }

  export type LivresAvgAggregateOutputType = {
    anneePublication: number | null
  }

  export type LivresSumAggregateOutputType = {
    anneePublication: number | null
  }

  export type LivresMinAggregateOutputType = {
    id: string | null
    livreID: string | null
    titre: string | null
    auteur: string | null
    description: string | null
    anneePublication: number | null
    ISBN: string | null
  }

  export type LivresMaxAggregateOutputType = {
    id: string | null
    livreID: string | null
    titre: string | null
    auteur: string | null
    description: string | null
    anneePublication: number | null
    ISBN: string | null
  }

  export type LivresCountAggregateOutputType = {
    id: number
    livreID: number
    titre: number
    auteur: number
    description: number
    anneePublication: number
    ISBN: number
    _all: number
  }


  export type LivresAvgAggregateInputType = {
    anneePublication?: true
  }

  export type LivresSumAggregateInputType = {
    anneePublication?: true
  }

  export type LivresMinAggregateInputType = {
    id?: true
    livreID?: true
    titre?: true
    auteur?: true
    description?: true
    anneePublication?: true
    ISBN?: true
  }

  export type LivresMaxAggregateInputType = {
    id?: true
    livreID?: true
    titre?: true
    auteur?: true
    description?: true
    anneePublication?: true
    ISBN?: true
  }

  export type LivresCountAggregateInputType = {
    id?: true
    livreID?: true
    titre?: true
    auteur?: true
    description?: true
    anneePublication?: true
    ISBN?: true
    _all?: true
  }

  export type LivresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livres to aggregate.
     */
    where?: LivresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivresOrderByWithRelationInput | LivresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livres
    **/
    _count?: true | LivresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivresMaxAggregateInputType
  }

  export type GetLivresAggregateType<T extends LivresAggregateArgs> = {
        [P in keyof T & keyof AggregateLivres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivres[P]>
      : GetScalarType<T[P], AggregateLivres[P]>
  }




  export type LivresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivresWhereInput
    orderBy?: LivresOrderByWithAggregationInput | LivresOrderByWithAggregationInput[]
    by: LivresScalarFieldEnum[] | LivresScalarFieldEnum
    having?: LivresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivresCountAggregateInputType | true
    _avg?: LivresAvgAggregateInputType
    _sum?: LivresSumAggregateInputType
    _min?: LivresMinAggregateInputType
    _max?: LivresMaxAggregateInputType
  }

  export type LivresGroupByOutputType = {
    id: string
    livreID: string
    titre: string
    auteur: string
    description: string
    anneePublication: number
    ISBN: string
    _count: LivresCountAggregateOutputType | null
    _avg: LivresAvgAggregateOutputType | null
    _sum: LivresSumAggregateOutputType | null
    _min: LivresMinAggregateOutputType | null
    _max: LivresMaxAggregateOutputType | null
  }

  type GetLivresGroupByPayload<T extends LivresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivresGroupByOutputType[P]>
            : GetScalarType<T[P], LivresGroupByOutputType[P]>
        }
      >
    >


  export type LivresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livreID?: boolean
    titre?: boolean
    auteur?: boolean
    description?: boolean
    anneePublication?: boolean
    ISBN?: boolean
  }, ExtArgs["result"]["livres"]>



  export type LivresSelectScalar = {
    id?: boolean
    livreID?: boolean
    titre?: boolean
    auteur?: boolean
    description?: boolean
    anneePublication?: boolean
    ISBN?: boolean
  }

  export type LivresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "livreID" | "titre" | "auteur" | "description" | "anneePublication" | "ISBN", ExtArgs["result"]["livres"]>

  export type $LivresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livres"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      livreID: string
      titre: string
      auteur: string
      description: string
      anneePublication: number
      ISBN: string
    }, ExtArgs["result"]["livres"]>
    composites: {}
  }

  type LivresGetPayload<S extends boolean | null | undefined | LivresDefaultArgs> = $Result.GetResult<Prisma.$LivresPayload, S>

  type LivresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivresCountAggregateInputType | true
    }

  export interface LivresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livres'], meta: { name: 'Livres' } }
    /**
     * Find zero or one Livres that matches the filter.
     * @param {LivresFindUniqueArgs} args - Arguments to find a Livres
     * @example
     * // Get one Livres
     * const livres = await prisma.livres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivresFindUniqueArgs>(args: SelectSubset<T, LivresFindUniqueArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivresFindUniqueOrThrowArgs} args - Arguments to find a Livres
     * @example
     * // Get one Livres
     * const livres = await prisma.livres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivresFindUniqueOrThrowArgs>(args: SelectSubset<T, LivresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresFindFirstArgs} args - Arguments to find a Livres
     * @example
     * // Get one Livres
     * const livres = await prisma.livres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivresFindFirstArgs>(args?: SelectSubset<T, LivresFindFirstArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresFindFirstOrThrowArgs} args - Arguments to find a Livres
     * @example
     * // Get one Livres
     * const livres = await prisma.livres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivresFindFirstOrThrowArgs>(args?: SelectSubset<T, LivresFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livres
     * const livres = await prisma.livres.findMany()
     * 
     * // Get first 10 Livres
     * const livres = await prisma.livres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livresWithIdOnly = await prisma.livres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivresFindManyArgs>(args?: SelectSubset<T, LivresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livres.
     * @param {LivresCreateArgs} args - Arguments to create a Livres.
     * @example
     * // Create one Livres
     * const Livres = await prisma.livres.create({
     *   data: {
     *     // ... data to create a Livres
     *   }
     * })
     * 
     */
    create<T extends LivresCreateArgs>(args: SelectSubset<T, LivresCreateArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livres.
     * @param {LivresCreateManyArgs} args - Arguments to create many Livres.
     * @example
     * // Create many Livres
     * const livres = await prisma.livres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivresCreateManyArgs>(args?: SelectSubset<T, LivresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Livres.
     * @param {LivresDeleteArgs} args - Arguments to delete one Livres.
     * @example
     * // Delete one Livres
     * const Livres = await prisma.livres.delete({
     *   where: {
     *     // ... filter to delete one Livres
     *   }
     * })
     * 
     */
    delete<T extends LivresDeleteArgs>(args: SelectSubset<T, LivresDeleteArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livres.
     * @param {LivresUpdateArgs} args - Arguments to update one Livres.
     * @example
     * // Update one Livres
     * const livres = await prisma.livres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivresUpdateArgs>(args: SelectSubset<T, LivresUpdateArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livres.
     * @param {LivresDeleteManyArgs} args - Arguments to filter Livres to delete.
     * @example
     * // Delete a few Livres
     * const { count } = await prisma.livres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivresDeleteManyArgs>(args?: SelectSubset<T, LivresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livres
     * const livres = await prisma.livres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivresUpdateManyArgs>(args: SelectSubset<T, LivresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Livres.
     * @param {LivresUpsertArgs} args - Arguments to update or create a Livres.
     * @example
     * // Update or create a Livres
     * const livres = await prisma.livres.upsert({
     *   create: {
     *     // ... data to create a Livres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livres we want to update
     *   }
     * })
     */
    upsert<T extends LivresUpsertArgs>(args: SelectSubset<T, LivresUpsertArgs<ExtArgs>>): Prisma__LivresClient<$Result.GetResult<Prisma.$LivresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livres that matches the filter.
     * @param {LivresFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const livres = await prisma.livres.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LivresFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Livres.
     * @param {LivresAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const livres = await prisma.livres.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LivresAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Livres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresCountArgs} args - Arguments to filter Livres to count.
     * @example
     * // Count the number of Livres
     * const count = await prisma.livres.count({
     *   where: {
     *     // ... the filter for the Livres we want to count
     *   }
     * })
    **/
    count<T extends LivresCountArgs>(
      args?: Subset<T, LivresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivresAggregateArgs>(args: Subset<T, LivresAggregateArgs>): Prisma.PrismaPromise<GetLivresAggregateType<T>>

    /**
     * Group by Livres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivresGroupByArgs} args - Group by arguments.
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
      T extends LivresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivresGroupByArgs['orderBy'] }
        : { orderBy?: LivresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LivresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livres model
   */
  readonly fields: LivresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Livres model
   */
  interface LivresFieldRefs {
    readonly id: FieldRef<"Livres", 'String'>
    readonly livreID: FieldRef<"Livres", 'String'>
    readonly titre: FieldRef<"Livres", 'String'>
    readonly auteur: FieldRef<"Livres", 'String'>
    readonly description: FieldRef<"Livres", 'String'>
    readonly anneePublication: FieldRef<"Livres", 'Int'>
    readonly ISBN: FieldRef<"Livres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Livres findUnique
   */
  export type LivresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * Filter, which Livres to fetch.
     */
    where: LivresWhereUniqueInput
  }

  /**
   * Livres findUniqueOrThrow
   */
  export type LivresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * Filter, which Livres to fetch.
     */
    where: LivresWhereUniqueInput
  }

  /**
   * Livres findFirst
   */
  export type LivresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * Filter, which Livres to fetch.
     */
    where?: LivresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivresOrderByWithRelationInput | LivresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livres.
     */
    cursor?: LivresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livres.
     */
    distinct?: LivresScalarFieldEnum | LivresScalarFieldEnum[]
  }

  /**
   * Livres findFirstOrThrow
   */
  export type LivresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * Filter, which Livres to fetch.
     */
    where?: LivresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivresOrderByWithRelationInput | LivresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livres.
     */
    cursor?: LivresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livres.
     */
    distinct?: LivresScalarFieldEnum | LivresScalarFieldEnum[]
  }

  /**
   * Livres findMany
   */
  export type LivresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * Filter, which Livres to fetch.
     */
    where?: LivresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livres to fetch.
     */
    orderBy?: LivresOrderByWithRelationInput | LivresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livres.
     */
    cursor?: LivresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livres.
     */
    skip?: number
    distinct?: LivresScalarFieldEnum | LivresScalarFieldEnum[]
  }

  /**
   * Livres create
   */
  export type LivresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * The data needed to create a Livres.
     */
    data: XOR<LivresCreateInput, LivresUncheckedCreateInput>
  }

  /**
   * Livres createMany
   */
  export type LivresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livres.
     */
    data: LivresCreateManyInput | LivresCreateManyInput[]
  }

  /**
   * Livres update
   */
  export type LivresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * The data needed to update a Livres.
     */
    data: XOR<LivresUpdateInput, LivresUncheckedUpdateInput>
    /**
     * Choose, which Livres to update.
     */
    where: LivresWhereUniqueInput
  }

  /**
   * Livres updateMany
   */
  export type LivresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livres.
     */
    data: XOR<LivresUpdateManyMutationInput, LivresUncheckedUpdateManyInput>
    /**
     * Filter which Livres to update
     */
    where?: LivresWhereInput
    /**
     * Limit how many Livres to update.
     */
    limit?: number
  }

  /**
   * Livres upsert
   */
  export type LivresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * The filter to search for the Livres to update in case it exists.
     */
    where: LivresWhereUniqueInput
    /**
     * In case the Livres found by the `where` argument doesn't exist, create a new Livres with this data.
     */
    create: XOR<LivresCreateInput, LivresUncheckedCreateInput>
    /**
     * In case the Livres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivresUpdateInput, LivresUncheckedUpdateInput>
  }

  /**
   * Livres delete
   */
  export type LivresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
    /**
     * Filter which Livres to delete.
     */
    where: LivresWhereUniqueInput
  }

  /**
   * Livres deleteMany
   */
  export type LivresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livres to delete
     */
    where?: LivresWhereInput
    /**
     * Limit how many Livres to delete.
     */
    limit?: number
  }

  /**
   * Livres findRaw
   */
  export type LivresFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Livres aggregateRaw
   */
  export type LivresAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Livres without action
   */
  export type LivresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livres
     */
    select?: LivresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livres
     */
    omit?: LivresOmit<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    notificationID: string | null
    userID: string | null
    livreID: string | null
    message: string | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    notificationID: string | null
    userID: string | null
    livreID: string | null
    message: string | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    notificationID: number
    userID: number
    livreID: number
    message: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    notificationID?: true
    userID?: true
    livreID?: true
    message?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    notificationID?: true
    userID?: true
    livreID?: true
    message?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    notificationID?: true
    userID?: true
    livreID?: true
    message?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    notificationID: string
    userID: string
    livreID: string
    message: string
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationID?: boolean
    userID?: boolean
    livreID?: boolean
    message?: boolean
  }, ExtArgs["result"]["notifications"]>



  export type NotificationsSelectScalar = {
    id?: boolean
    notificationID?: boolean
    userID?: boolean
    livreID?: boolean
    message?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationID" | "userID" | "livreID" | "message", ExtArgs["result"]["notifications"]>

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationID: string
      userID: string
      livreID: string
      message: string
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * @param {NotificationsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notifications = await prisma.notifications.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notifications.
     * @param {NotificationsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notifications = await prisma.notifications.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly notificationID: FieldRef<"Notifications", 'String'>
    readonly userID: FieldRef<"Notifications", 'String'>
    readonly livreID: FieldRef<"Notifications", 'String'>
    readonly message: FieldRef<"Notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications findRaw
   */
  export type NotificationsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notifications aggregateRaw
   */
  export type NotificationsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    userID: 'userID'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmpruntsScalarFieldEnum: {
    id: 'id',
    empruntID: 'empruntID',
    livreID: 'livreID',
    userID: 'userID',
    dateEmprunt: 'dateEmprunt',
    dateRetour: 'dateRetour'
  };

  export type EmpruntsScalarFieldEnum = (typeof EmpruntsScalarFieldEnum)[keyof typeof EmpruntsScalarFieldEnum]


  export const LivresScalarFieldEnum: {
    id: 'id',
    livreID: 'livreID',
    titre: 'titre',
    auteur: 'auteur',
    description: 'description',
    anneePublication: 'anneePublication',
    ISBN: 'ISBN'
  };

  export type LivresScalarFieldEnum = (typeof LivresScalarFieldEnum)[keyof typeof LivresScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    notificationID: 'notificationID',
    userID: 'userID',
    livreID: 'livreID',
    message: 'message'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userID?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userID?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userID?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userID?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userID?: StringWithAggregatesFilter<"User"> | string
  }

  export type EmpruntsWhereInput = {
    AND?: EmpruntsWhereInput | EmpruntsWhereInput[]
    OR?: EmpruntsWhereInput[]
    NOT?: EmpruntsWhereInput | EmpruntsWhereInput[]
    id?: StringFilter<"Emprunts"> | string
    empruntID?: StringFilter<"Emprunts"> | string
    livreID?: StringFilter<"Emprunts"> | string
    userID?: StringFilter<"Emprunts"> | string
    dateEmprunt?: DateTimeFilter<"Emprunts"> | Date | string
    dateRetour?: DateTimeFilter<"Emprunts"> | Date | string
  }

  export type EmpruntsOrderByWithRelationInput = {
    id?: SortOrder
    empruntID?: SortOrder
    livreID?: SortOrder
    userID?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
  }

  export type EmpruntsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmpruntsWhereInput | EmpruntsWhereInput[]
    OR?: EmpruntsWhereInput[]
    NOT?: EmpruntsWhereInput | EmpruntsWhereInput[]
    empruntID?: StringFilter<"Emprunts"> | string
    livreID?: StringFilter<"Emprunts"> | string
    userID?: StringFilter<"Emprunts"> | string
    dateEmprunt?: DateTimeFilter<"Emprunts"> | Date | string
    dateRetour?: DateTimeFilter<"Emprunts"> | Date | string
  }, "id">

  export type EmpruntsOrderByWithAggregationInput = {
    id?: SortOrder
    empruntID?: SortOrder
    livreID?: SortOrder
    userID?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
    _count?: EmpruntsCountOrderByAggregateInput
    _max?: EmpruntsMaxOrderByAggregateInput
    _min?: EmpruntsMinOrderByAggregateInput
  }

  export type EmpruntsScalarWhereWithAggregatesInput = {
    AND?: EmpruntsScalarWhereWithAggregatesInput | EmpruntsScalarWhereWithAggregatesInput[]
    OR?: EmpruntsScalarWhereWithAggregatesInput[]
    NOT?: EmpruntsScalarWhereWithAggregatesInput | EmpruntsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Emprunts"> | string
    empruntID?: StringWithAggregatesFilter<"Emprunts"> | string
    livreID?: StringWithAggregatesFilter<"Emprunts"> | string
    userID?: StringWithAggregatesFilter<"Emprunts"> | string
    dateEmprunt?: DateTimeWithAggregatesFilter<"Emprunts"> | Date | string
    dateRetour?: DateTimeWithAggregatesFilter<"Emprunts"> | Date | string
  }

  export type LivresWhereInput = {
    AND?: LivresWhereInput | LivresWhereInput[]
    OR?: LivresWhereInput[]
    NOT?: LivresWhereInput | LivresWhereInput[]
    id?: StringFilter<"Livres"> | string
    livreID?: StringFilter<"Livres"> | string
    titre?: StringFilter<"Livres"> | string
    auteur?: StringFilter<"Livres"> | string
    description?: StringFilter<"Livres"> | string
    anneePublication?: IntFilter<"Livres"> | number
    ISBN?: StringFilter<"Livres"> | string
  }

  export type LivresOrderByWithRelationInput = {
    id?: SortOrder
    livreID?: SortOrder
    titre?: SortOrder
    auteur?: SortOrder
    description?: SortOrder
    anneePublication?: SortOrder
    ISBN?: SortOrder
  }

  export type LivresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LivresWhereInput | LivresWhereInput[]
    OR?: LivresWhereInput[]
    NOT?: LivresWhereInput | LivresWhereInput[]
    livreID?: StringFilter<"Livres"> | string
    titre?: StringFilter<"Livres"> | string
    auteur?: StringFilter<"Livres"> | string
    description?: StringFilter<"Livres"> | string
    anneePublication?: IntFilter<"Livres"> | number
    ISBN?: StringFilter<"Livres"> | string
  }, "id">

  export type LivresOrderByWithAggregationInput = {
    id?: SortOrder
    livreID?: SortOrder
    titre?: SortOrder
    auteur?: SortOrder
    description?: SortOrder
    anneePublication?: SortOrder
    ISBN?: SortOrder
    _count?: LivresCountOrderByAggregateInput
    _avg?: LivresAvgOrderByAggregateInput
    _max?: LivresMaxOrderByAggregateInput
    _min?: LivresMinOrderByAggregateInput
    _sum?: LivresSumOrderByAggregateInput
  }

  export type LivresScalarWhereWithAggregatesInput = {
    AND?: LivresScalarWhereWithAggregatesInput | LivresScalarWhereWithAggregatesInput[]
    OR?: LivresScalarWhereWithAggregatesInput[]
    NOT?: LivresScalarWhereWithAggregatesInput | LivresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Livres"> | string
    livreID?: StringWithAggregatesFilter<"Livres"> | string
    titre?: StringWithAggregatesFilter<"Livres"> | string
    auteur?: StringWithAggregatesFilter<"Livres"> | string
    description?: StringWithAggregatesFilter<"Livres"> | string
    anneePublication?: IntWithAggregatesFilter<"Livres"> | number
    ISBN?: StringWithAggregatesFilter<"Livres"> | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    notificationID?: StringFilter<"Notifications"> | string
    userID?: StringFilter<"Notifications"> | string
    livreID?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    notificationID?: SortOrder
    userID?: SortOrder
    livreID?: SortOrder
    message?: SortOrder
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    notificationID?: StringFilter<"Notifications"> | string
    userID?: StringFilter<"Notifications"> | string
    livreID?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    notificationID?: SortOrder
    userID?: SortOrder
    livreID?: SortOrder
    message?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    notificationID?: StringWithAggregatesFilter<"Notifications"> | string
    userID?: StringWithAggregatesFilter<"Notifications"> | string
    livreID?: StringWithAggregatesFilter<"Notifications"> | string
    message?: StringWithAggregatesFilter<"Notifications"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    userID: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    userID: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    userID: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type EmpruntsCreateInput = {
    id?: string
    empruntID: string
    livreID: string
    userID: string
    dateEmprunt: Date | string
    dateRetour: Date | string
  }

  export type EmpruntsUncheckedCreateInput = {
    id?: string
    empruntID: string
    livreID: string
    userID: string
    dateEmprunt: Date | string
    dateRetour: Date | string
  }

  export type EmpruntsUpdateInput = {
    empruntID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpruntsUncheckedUpdateInput = {
    empruntID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpruntsCreateManyInput = {
    id?: string
    empruntID: string
    livreID: string
    userID: string
    dateEmprunt: Date | string
    dateRetour: Date | string
  }

  export type EmpruntsUpdateManyMutationInput = {
    empruntID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpruntsUncheckedUpdateManyInput = {
    empruntID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    dateEmprunt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateRetour?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivresCreateInput = {
    id?: string
    livreID: string
    titre: string
    auteur: string
    description: string
    anneePublication: number
    ISBN: string
  }

  export type LivresUncheckedCreateInput = {
    id?: string
    livreID: string
    titre: string
    auteur: string
    description: string
    anneePublication: number
    ISBN: string
  }

  export type LivresUpdateInput = {
    livreID?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    anneePublication?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
  }

  export type LivresUncheckedUpdateInput = {
    livreID?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    anneePublication?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
  }

  export type LivresCreateManyInput = {
    id?: string
    livreID: string
    titre: string
    auteur: string
    description: string
    anneePublication: number
    ISBN: string
  }

  export type LivresUpdateManyMutationInput = {
    livreID?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    anneePublication?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
  }

  export type LivresUncheckedUpdateManyInput = {
    livreID?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    anneePublication?: IntFieldUpdateOperationsInput | number
    ISBN?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsCreateInput = {
    id?: string
    notificationID: string
    userID: string
    livreID: string
    message: string
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    notificationID: string
    userID: string
    livreID: string
    message: string
  }

  export type NotificationsUpdateInput = {
    notificationID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsUncheckedUpdateInput = {
    notificationID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsCreateManyInput = {
    id?: string
    notificationID: string
    userID: string
    livreID: string
    message: string
  }

  export type NotificationsUpdateManyMutationInput = {
    notificationID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    notificationID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    livreID?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userID?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userID?: SortOrder
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

  export type EmpruntsCountOrderByAggregateInput = {
    id?: SortOrder
    empruntID?: SortOrder
    livreID?: SortOrder
    userID?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
  }

  export type EmpruntsMaxOrderByAggregateInput = {
    id?: SortOrder
    empruntID?: SortOrder
    livreID?: SortOrder
    userID?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
  }

  export type EmpruntsMinOrderByAggregateInput = {
    id?: SortOrder
    empruntID?: SortOrder
    livreID?: SortOrder
    userID?: SortOrder
    dateEmprunt?: SortOrder
    dateRetour?: SortOrder
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

  export type LivresCountOrderByAggregateInput = {
    id?: SortOrder
    livreID?: SortOrder
    titre?: SortOrder
    auteur?: SortOrder
    description?: SortOrder
    anneePublication?: SortOrder
    ISBN?: SortOrder
  }

  export type LivresAvgOrderByAggregateInput = {
    anneePublication?: SortOrder
  }

  export type LivresMaxOrderByAggregateInput = {
    id?: SortOrder
    livreID?: SortOrder
    titre?: SortOrder
    auteur?: SortOrder
    description?: SortOrder
    anneePublication?: SortOrder
    ISBN?: SortOrder
  }

  export type LivresMinOrderByAggregateInput = {
    id?: SortOrder
    livreID?: SortOrder
    titre?: SortOrder
    auteur?: SortOrder
    description?: SortOrder
    anneePublication?: SortOrder
    ISBN?: SortOrder
  }

  export type LivresSumOrderByAggregateInput = {
    anneePublication?: SortOrder
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

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    notificationID?: SortOrder
    userID?: SortOrder
    livreID?: SortOrder
    message?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationID?: SortOrder
    userID?: SortOrder
    livreID?: SortOrder
    message?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    notificationID?: SortOrder
    userID?: SortOrder
    livreID?: SortOrder
    message?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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