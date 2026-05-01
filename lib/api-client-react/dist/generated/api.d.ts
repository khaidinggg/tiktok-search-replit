import type { QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { ErrorResponse, HealthStatus, SearchTikTokParams, TikTokSearchResponse } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Search for TikTok videos using the Brave Search API
 * @summary Search TikTok videos
 */
export declare const getSearchTikTokUrl: (params: SearchTikTokParams) => string;
export declare const searchTikTok: (params: SearchTikTokParams, options?: RequestInit) => Promise<TikTokSearchResponse>;
export declare const getSearchTikTokQueryKey: (params?: SearchTikTokParams) => readonly ["/api/tiktok/search", ...SearchTikTokParams[]];
export declare const getSearchTikTokQueryOptions: <TData = Awaited<ReturnType<typeof searchTikTok>>, TError = ErrorType<ErrorResponse>>(params: SearchTikTokParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchTikTok>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof searchTikTok>>, TError, TData> & {
    queryKey: QueryKey;
};
export type SearchTikTokQueryResult = NonNullable<Awaited<ReturnType<typeof searchTikTok>>>;
export type SearchTikTokQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Search TikTok videos
 */
export declare function useSearchTikTok<TData = Awaited<ReturnType<typeof searchTikTok>>, TError = ErrorType<ErrorResponse>>(params: SearchTikTokParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchTikTok>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map