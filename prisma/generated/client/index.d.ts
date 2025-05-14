
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
 * Model waste
 * 
 */
export type waste = $Result.DefaultSelection<Prisma.$wastePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wastes
 * const wastes = await prisma.waste.findMany()
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
   * // Fetch zero or more Wastes
   * const wastes = await prisma.waste.findMany()
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
   * `prisma.waste`: Exposes CRUD operations for the **waste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wastes
    * const wastes = await prisma.waste.findMany()
    * ```
    */
  get waste(): Prisma.wasteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    waste: 'waste'
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
      modelProps: "waste"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      waste: {
        payload: Prisma.$wastePayload<ExtArgs>
        fields: Prisma.wasteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wasteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wasteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>
          }
          findFirst: {
            args: Prisma.wasteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wasteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>
          }
          findMany: {
            args: Prisma.wasteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>[]
          }
          create: {
            args: Prisma.wasteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>
          }
          createMany: {
            args: Prisma.wasteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wasteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>[]
          }
          delete: {
            args: Prisma.wasteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>
          }
          update: {
            args: Prisma.wasteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>
          }
          deleteMany: {
            args: Prisma.wasteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wasteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.wasteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wastePayload>
          }
          aggregate: {
            args: Prisma.WasteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaste>
          }
          groupBy: {
            args: Prisma.wasteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WasteGroupByOutputType>[]
          }
          count: {
            args: Prisma.wasteCountArgs<ExtArgs>
            result: $Utils.Optional<WasteCountAggregateOutputType> | number
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
    waste?: wasteOmit
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
   * Model waste
   */

  export type AggregateWaste = {
    _count: WasteCountAggregateOutputType | null
    _avg: WasteAvgAggregateOutputType | null
    _sum: WasteSumAggregateOutputType | null
    _min: WasteMinAggregateOutputType | null
    _max: WasteMaxAggregateOutputType | null
  }

  export type WasteAvgAggregateOutputType = {
    id: number | null
    waste_quantity: number | null
  }

  export type WasteSumAggregateOutputType = {
    id: number | null
    waste_quantity: number | null
  }

  export type WasteMinAggregateOutputType = {
    id: number | null
    waste_name: string | null
    waste_type: string | null
    waste_location: string | null
    waste_quantity: number | null
  }

  export type WasteMaxAggregateOutputType = {
    id: number | null
    waste_name: string | null
    waste_type: string | null
    waste_location: string | null
    waste_quantity: number | null
  }

  export type WasteCountAggregateOutputType = {
    id: number
    waste_name: number
    waste_type: number
    waste_location: number
    waste_quantity: number
    _all: number
  }


  export type WasteAvgAggregateInputType = {
    id?: true
    waste_quantity?: true
  }

  export type WasteSumAggregateInputType = {
    id?: true
    waste_quantity?: true
  }

  export type WasteMinAggregateInputType = {
    id?: true
    waste_name?: true
    waste_type?: true
    waste_location?: true
    waste_quantity?: true
  }

  export type WasteMaxAggregateInputType = {
    id?: true
    waste_name?: true
    waste_type?: true
    waste_location?: true
    waste_quantity?: true
  }

  export type WasteCountAggregateInputType = {
    id?: true
    waste_name?: true
    waste_type?: true
    waste_location?: true
    waste_quantity?: true
    _all?: true
  }

  export type WasteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waste to aggregate.
     */
    where?: wasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wastes to fetch.
     */
    orderBy?: wasteOrderByWithRelationInput | wasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wastes
    **/
    _count?: true | WasteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WasteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WasteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WasteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WasteMaxAggregateInputType
  }

  export type GetWasteAggregateType<T extends WasteAggregateArgs> = {
        [P in keyof T & keyof AggregateWaste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaste[P]>
      : GetScalarType<T[P], AggregateWaste[P]>
  }




  export type wasteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wasteWhereInput
    orderBy?: wasteOrderByWithAggregationInput | wasteOrderByWithAggregationInput[]
    by: WasteScalarFieldEnum[] | WasteScalarFieldEnum
    having?: wasteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WasteCountAggregateInputType | true
    _avg?: WasteAvgAggregateInputType
    _sum?: WasteSumAggregateInputType
    _min?: WasteMinAggregateInputType
    _max?: WasteMaxAggregateInputType
  }

  export type WasteGroupByOutputType = {
    id: number
    waste_name: string
    waste_type: string
    waste_location: string
    waste_quantity: number
    _count: WasteCountAggregateOutputType | null
    _avg: WasteAvgAggregateOutputType | null
    _sum: WasteSumAggregateOutputType | null
    _min: WasteMinAggregateOutputType | null
    _max: WasteMaxAggregateOutputType | null
  }

  type GetWasteGroupByPayload<T extends wasteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WasteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WasteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WasteGroupByOutputType[P]>
            : GetScalarType<T[P], WasteGroupByOutputType[P]>
        }
      >
    >


  export type wasteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waste_name?: boolean
    waste_type?: boolean
    waste_location?: boolean
    waste_quantity?: boolean
  }, ExtArgs["result"]["waste"]>

  export type wasteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waste_name?: boolean
    waste_type?: boolean
    waste_location?: boolean
    waste_quantity?: boolean
  }, ExtArgs["result"]["waste"]>


  export type wasteSelectScalar = {
    id?: boolean
    waste_name?: boolean
    waste_type?: boolean
    waste_location?: boolean
    waste_quantity?: boolean
  }

  export type wasteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "waste_name" | "waste_type" | "waste_location" | "waste_quantity", ExtArgs["result"]["waste"]>

  export type $wastePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "waste"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      waste_name: string
      waste_type: string
      waste_location: string
      waste_quantity: number
    }, ExtArgs["result"]["waste"]>
    composites: {}
  }

  type wasteGetPayload<S extends boolean | null | undefined | wasteDefaultArgs> = $Result.GetResult<Prisma.$wastePayload, S>

  type wasteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wasteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WasteCountAggregateInputType | true
    }

  export interface wasteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waste'], meta: { name: 'waste' } }
    /**
     * Find zero or one Waste that matches the filter.
     * @param {wasteFindUniqueArgs} args - Arguments to find a Waste
     * @example
     * // Get one Waste
     * const waste = await prisma.waste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wasteFindUniqueArgs>(args: SelectSubset<T, wasteFindUniqueArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wasteFindUniqueOrThrowArgs} args - Arguments to find a Waste
     * @example
     * // Get one Waste
     * const waste = await prisma.waste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wasteFindUniqueOrThrowArgs>(args: SelectSubset<T, wasteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wasteFindFirstArgs} args - Arguments to find a Waste
     * @example
     * // Get one Waste
     * const waste = await prisma.waste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wasteFindFirstArgs>(args?: SelectSubset<T, wasteFindFirstArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wasteFindFirstOrThrowArgs} args - Arguments to find a Waste
     * @example
     * // Get one Waste
     * const waste = await prisma.waste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wasteFindFirstOrThrowArgs>(args?: SelectSubset<T, wasteFindFirstOrThrowArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wastes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wasteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wastes
     * const wastes = await prisma.waste.findMany()
     * 
     * // Get first 10 Wastes
     * const wastes = await prisma.waste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wasteWithIdOnly = await prisma.waste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends wasteFindManyArgs>(args?: SelectSubset<T, wasteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waste.
     * @param {wasteCreateArgs} args - Arguments to create a Waste.
     * @example
     * // Create one Waste
     * const Waste = await prisma.waste.create({
     *   data: {
     *     // ... data to create a Waste
     *   }
     * })
     * 
     */
    create<T extends wasteCreateArgs>(args: SelectSubset<T, wasteCreateArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wastes.
     * @param {wasteCreateManyArgs} args - Arguments to create many Wastes.
     * @example
     * // Create many Wastes
     * const waste = await prisma.waste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wasteCreateManyArgs>(args?: SelectSubset<T, wasteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wastes and returns the data saved in the database.
     * @param {wasteCreateManyAndReturnArgs} args - Arguments to create many Wastes.
     * @example
     * // Create many Wastes
     * const waste = await prisma.waste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wastes and only return the `id`
     * const wasteWithIdOnly = await prisma.waste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wasteCreateManyAndReturnArgs>(args?: SelectSubset<T, wasteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waste.
     * @param {wasteDeleteArgs} args - Arguments to delete one Waste.
     * @example
     * // Delete one Waste
     * const Waste = await prisma.waste.delete({
     *   where: {
     *     // ... filter to delete one Waste
     *   }
     * })
     * 
     */
    delete<T extends wasteDeleteArgs>(args: SelectSubset<T, wasteDeleteArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waste.
     * @param {wasteUpdateArgs} args - Arguments to update one Waste.
     * @example
     * // Update one Waste
     * const waste = await prisma.waste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wasteUpdateArgs>(args: SelectSubset<T, wasteUpdateArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wastes.
     * @param {wasteDeleteManyArgs} args - Arguments to filter Wastes to delete.
     * @example
     * // Delete a few Wastes
     * const { count } = await prisma.waste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wasteDeleteManyArgs>(args?: SelectSubset<T, wasteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wastes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wasteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wastes
     * const waste = await prisma.waste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wasteUpdateManyArgs>(args: SelectSubset<T, wasteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Waste.
     * @param {wasteUpsertArgs} args - Arguments to update or create a Waste.
     * @example
     * // Update or create a Waste
     * const waste = await prisma.waste.upsert({
     *   create: {
     *     // ... data to create a Waste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waste we want to update
     *   }
     * })
     */
    upsert<T extends wasteUpsertArgs>(args: SelectSubset<T, wasteUpsertArgs<ExtArgs>>): Prisma__wasteClient<$Result.GetResult<Prisma.$wastePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wastes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wasteCountArgs} args - Arguments to filter Wastes to count.
     * @example
     * // Count the number of Wastes
     * const count = await prisma.waste.count({
     *   where: {
     *     // ... the filter for the Wastes we want to count
     *   }
     * })
    **/
    count<T extends wasteCountArgs>(
      args?: Subset<T, wasteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WasteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WasteAggregateArgs>(args: Subset<T, WasteAggregateArgs>): Prisma.PrismaPromise<GetWasteAggregateType<T>>

    /**
     * Group by Waste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wasteGroupByArgs} args - Group by arguments.
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
      T extends wasteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wasteGroupByArgs['orderBy'] }
        : { orderBy?: wasteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, wasteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWasteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the waste model
   */
  readonly fields: wasteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for waste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wasteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the waste model
   */
  interface wasteFieldRefs {
    readonly id: FieldRef<"waste", 'Int'>
    readonly waste_name: FieldRef<"waste", 'String'>
    readonly waste_type: FieldRef<"waste", 'String'>
    readonly waste_location: FieldRef<"waste", 'String'>
    readonly waste_quantity: FieldRef<"waste", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * waste findUnique
   */
  export type wasteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * Filter, which waste to fetch.
     */
    where: wasteWhereUniqueInput
  }

  /**
   * waste findUniqueOrThrow
   */
  export type wasteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * Filter, which waste to fetch.
     */
    where: wasteWhereUniqueInput
  }

  /**
   * waste findFirst
   */
  export type wasteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * Filter, which waste to fetch.
     */
    where?: wasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wastes to fetch.
     */
    orderBy?: wasteOrderByWithRelationInput | wasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wastes.
     */
    cursor?: wasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wastes.
     */
    distinct?: WasteScalarFieldEnum | WasteScalarFieldEnum[]
  }

  /**
   * waste findFirstOrThrow
   */
  export type wasteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * Filter, which waste to fetch.
     */
    where?: wasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wastes to fetch.
     */
    orderBy?: wasteOrderByWithRelationInput | wasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wastes.
     */
    cursor?: wasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wastes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wastes.
     */
    distinct?: WasteScalarFieldEnum | WasteScalarFieldEnum[]
  }

  /**
   * waste findMany
   */
  export type wasteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * Filter, which wastes to fetch.
     */
    where?: wasteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wastes to fetch.
     */
    orderBy?: wasteOrderByWithRelationInput | wasteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wastes.
     */
    cursor?: wasteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wastes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wastes.
     */
    skip?: number
    distinct?: WasteScalarFieldEnum | WasteScalarFieldEnum[]
  }

  /**
   * waste create
   */
  export type wasteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * The data needed to create a waste.
     */
    data: XOR<wasteCreateInput, wasteUncheckedCreateInput>
  }

  /**
   * waste createMany
   */
  export type wasteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wastes.
     */
    data: wasteCreateManyInput | wasteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waste createManyAndReturn
   */
  export type wasteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * The data used to create many wastes.
     */
    data: wasteCreateManyInput | wasteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waste update
   */
  export type wasteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * The data needed to update a waste.
     */
    data: XOR<wasteUpdateInput, wasteUncheckedUpdateInput>
    /**
     * Choose, which waste to update.
     */
    where: wasteWhereUniqueInput
  }

  /**
   * waste updateMany
   */
  export type wasteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wastes.
     */
    data: XOR<wasteUpdateManyMutationInput, wasteUncheckedUpdateManyInput>
    /**
     * Filter which wastes to update
     */
    where?: wasteWhereInput
  }

  /**
   * waste upsert
   */
  export type wasteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * The filter to search for the waste to update in case it exists.
     */
    where: wasteWhereUniqueInput
    /**
     * In case the waste found by the `where` argument doesn't exist, create a new waste with this data.
     */
    create: XOR<wasteCreateInput, wasteUncheckedCreateInput>
    /**
     * In case the waste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wasteUpdateInput, wasteUncheckedUpdateInput>
  }

  /**
   * waste delete
   */
  export type wasteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
    /**
     * Filter which waste to delete.
     */
    where: wasteWhereUniqueInput
  }

  /**
   * waste deleteMany
   */
  export type wasteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wastes to delete
     */
    where?: wasteWhereInput
  }

  /**
   * waste without action
   */
  export type wasteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waste
     */
    select?: wasteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waste
     */
    omit?: wasteOmit<ExtArgs> | null
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


  export const WasteScalarFieldEnum: {
    id: 'id',
    waste_name: 'waste_name',
    waste_type: 'waste_type',
    waste_location: 'waste_location',
    waste_quantity: 'waste_quantity'
  };

  export type WasteScalarFieldEnum = (typeof WasteScalarFieldEnum)[keyof typeof WasteScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type wasteWhereInput = {
    AND?: wasteWhereInput | wasteWhereInput[]
    OR?: wasteWhereInput[]
    NOT?: wasteWhereInput | wasteWhereInput[]
    id?: IntFilter<"waste"> | number
    waste_name?: StringFilter<"waste"> | string
    waste_type?: StringFilter<"waste"> | string
    waste_location?: StringFilter<"waste"> | string
    waste_quantity?: IntFilter<"waste"> | number
  }

  export type wasteOrderByWithRelationInput = {
    id?: SortOrder
    waste_name?: SortOrder
    waste_type?: SortOrder
    waste_location?: SortOrder
    waste_quantity?: SortOrder
  }

  export type wasteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: wasteWhereInput | wasteWhereInput[]
    OR?: wasteWhereInput[]
    NOT?: wasteWhereInput | wasteWhereInput[]
    waste_name?: StringFilter<"waste"> | string
    waste_type?: StringFilter<"waste"> | string
    waste_location?: StringFilter<"waste"> | string
    waste_quantity?: IntFilter<"waste"> | number
  }, "id">

  export type wasteOrderByWithAggregationInput = {
    id?: SortOrder
    waste_name?: SortOrder
    waste_type?: SortOrder
    waste_location?: SortOrder
    waste_quantity?: SortOrder
    _count?: wasteCountOrderByAggregateInput
    _avg?: wasteAvgOrderByAggregateInput
    _max?: wasteMaxOrderByAggregateInput
    _min?: wasteMinOrderByAggregateInput
    _sum?: wasteSumOrderByAggregateInput
  }

  export type wasteScalarWhereWithAggregatesInput = {
    AND?: wasteScalarWhereWithAggregatesInput | wasteScalarWhereWithAggregatesInput[]
    OR?: wasteScalarWhereWithAggregatesInput[]
    NOT?: wasteScalarWhereWithAggregatesInput | wasteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"waste"> | number
    waste_name?: StringWithAggregatesFilter<"waste"> | string
    waste_type?: StringWithAggregatesFilter<"waste"> | string
    waste_location?: StringWithAggregatesFilter<"waste"> | string
    waste_quantity?: IntWithAggregatesFilter<"waste"> | number
  }

  export type wasteCreateInput = {
    waste_name: string
    waste_type: string
    waste_location: string
    waste_quantity: number
  }

  export type wasteUncheckedCreateInput = {
    id?: number
    waste_name: string
    waste_type: string
    waste_location: string
    waste_quantity: number
  }

  export type wasteUpdateInput = {
    waste_name?: StringFieldUpdateOperationsInput | string
    waste_type?: StringFieldUpdateOperationsInput | string
    waste_location?: StringFieldUpdateOperationsInput | string
    waste_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type wasteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    waste_name?: StringFieldUpdateOperationsInput | string
    waste_type?: StringFieldUpdateOperationsInput | string
    waste_location?: StringFieldUpdateOperationsInput | string
    waste_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type wasteCreateManyInput = {
    id?: number
    waste_name: string
    waste_type: string
    waste_location: string
    waste_quantity: number
  }

  export type wasteUpdateManyMutationInput = {
    waste_name?: StringFieldUpdateOperationsInput | string
    waste_type?: StringFieldUpdateOperationsInput | string
    waste_location?: StringFieldUpdateOperationsInput | string
    waste_quantity?: IntFieldUpdateOperationsInput | number
  }

  export type wasteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    waste_name?: StringFieldUpdateOperationsInput | string
    waste_type?: StringFieldUpdateOperationsInput | string
    waste_location?: StringFieldUpdateOperationsInput | string
    waste_quantity?: IntFieldUpdateOperationsInput | number
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

  export type wasteCountOrderByAggregateInput = {
    id?: SortOrder
    waste_name?: SortOrder
    waste_type?: SortOrder
    waste_location?: SortOrder
    waste_quantity?: SortOrder
  }

  export type wasteAvgOrderByAggregateInput = {
    id?: SortOrder
    waste_quantity?: SortOrder
  }

  export type wasteMaxOrderByAggregateInput = {
    id?: SortOrder
    waste_name?: SortOrder
    waste_type?: SortOrder
    waste_location?: SortOrder
    waste_quantity?: SortOrder
  }

  export type wasteMinOrderByAggregateInput = {
    id?: SortOrder
    waste_name?: SortOrder
    waste_type?: SortOrder
    waste_location?: SortOrder
    waste_quantity?: SortOrder
  }

  export type wasteSumOrderByAggregateInput = {
    id?: SortOrder
    waste_quantity?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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