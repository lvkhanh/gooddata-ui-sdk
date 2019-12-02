// (C) 2007-2019 GoodData Corporation
/**
 *
 * @internal
 */
export namespace GdcCatalog {
    export type CatalogItemType = "attribute" | "metric" | "fact";

    export interface ICatalogGroup {
        readonly title: string;
        readonly identifier: string;
    }

    interface ICatalogItemBase {
        readonly type: CatalogItemType;
        readonly title: string;
        readonly identifier: string;
        readonly summary: string;
        readonly production: boolean;
        readonly groups: string[];
        readonly links: {
            self: string;
        };
    }

    export interface ICatalogAttribute extends ICatalogItemBase {
        readonly type: "attribute";
        readonly links: {
            readonly self: string;
            readonly defaultDisplayForm: string;
        };
    }

    export function isCatalogAttribute(item: CatalogItem): item is ICatalogAttribute {
        return item.type === "attribute";
    }

    export interface ICatalogMetric extends ICatalogItemBase {
        readonly type: "metric";
        readonly expression: string;
        readonly format: string;
    }

    export function isCatalogMetric(item: CatalogItem): item is ICatalogMetric {
        return item.type === "metric";
    }

    export interface ICatalogFact extends ICatalogItemBase {
        readonly type: "fact";
    }

    export function isCatalogFact(item: CatalogItem): item is ICatalogFact {
        return item.type === "fact";
    }

    export type CatalogItem = ICatalogAttribute | ICatalogMetric | ICatalogFact;

    export type ItemDescription = {
        uri: string;
    };

    // request params for GET /gdc/internal/projects/${projectId}/catalog/items
    export interface ILoadCatalogItemsParams {
        readonly types?: CatalogItemType[];
        readonly offset?: number;
        readonly limit?: number;
        readonly includeWithTags?: string[];
        readonly excludeWithTags?: string[];
        readonly production?: 1 | 0;
        readonly csvDataSets?: string[]; // dataSet identifiers
    }

    // response for GET /gdc/internal/projects/${projectId}/catalog/items
    export interface ILoadCatalogItemsResponse {
        catalogItems: {
            items: CatalogItem[];
            paging: {
                offset: number;
                limit: number;
            };
        };
    }

    // request params for GET /gdc/internal/projects/${projectId}/catalog/groups
    export interface ILoadCatalogGroupsParams {
        readonly includeWithTags?: string[];
        readonly excludeWithTags?: string[];
        readonly production?: 1 | 0;
        readonly csvDataSets?: string[];
    }

    // response for GET /gdc/internal/projects/${projectId}/catalog/groups
    export interface ILoadCatalogGroupsResponse {
        catalogGroups: ICatalogGroup[];
    }

    // request params for POST /gdc/internal/projects/${projectId}/catalog/query
    export interface ILoadAvailableCatalogItemsParams {
        catalogQueryRequest: {
            bucketItems: ItemDescription[];
            types?: CatalogItemType[];
        };
    }

    // response for POST /gdc/internal/projects/${projectId}/catalog/query
    export interface ILoadAvailableCatalogItemsResponse {
        catalogAvailableItems: {
            // uris of available items
            items: string[];
        };
    }
}