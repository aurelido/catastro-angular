export class LocationListConfig {
    type = 'all';

    filters: {
        type?: string,
        limit?: number,
        offset?: number
    } = {};
}
