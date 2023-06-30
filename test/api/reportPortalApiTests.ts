import {FiltersService} from '../../src/service/filtersService';
import {expect, use} from 'chai';
import ChaiJsonSchema from 'chai-json-schema';
import {
    createFilterErrorResponseSchema,
    createFilterValidResponseSchema,
    deleteFilterErrorResponseSchema,
    deleteFilterValidResponseSchema,
    filtersListErrorResponseSchema,
    filtersListValidResponseSchema,
} from '../../testData/schemas';
import {Utils} from '../../src/utils/utils';
import {HttpMethods} from '../../src/service/api/htppMethods';
import Waiters from '../../src/helpers/waiters';
use(ChaiJsonSchema);

describe('Filter Service- List of Filters: General case ', () => {
    const statusCode = 200;

    it('Correct request', async () => {
        let res = await FiltersService.getPermittedFilters();
        await Waiters.delay(60000);
        expect(res.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.data).to.be.jsonSchema(filtersListValidResponseSchema, 'json response in not valid');
    });
});

describe('Filter Service- List of Filters: Error 401 ', () => {
    const statusCode = 401;

    it('Get list of filters with bad token', async () => {
        let brokenToken = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
        let res = await FiltersService.getPermittedFilters(brokenToken);

        expect(res.response.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.response.data).to.be.jsonSchema(filtersListErrorResponseSchema, 'json response in not valid');
    });
});

describe('Filter Service- Add Filter: General case', () => {
    const statusCode = 201;
    const filterName = Utils.randomTextGenerator(10);
    const description = Utils.randomTextGenerator(50);
    const launchName = 'Demo Api Tests';
    let id: number;

    after(async () => {
        await FiltersService.deleteFilterById(id);
    });

    it('Create Filter with valid data', async () => {
        let res = await FiltersService.createUserFilter(filterName, description, launchName);
        id = res.data.id;

        expect(res.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.data).to.be.jsonSchema(createFilterValidResponseSchema, 'json response in not valid');
    });
});

describe('Filter Service- Add Filter: Duplicate name', () => {
    const statusCode = 409;
    const filterName = Utils.randomTextGenerator(10);
    const description = Utils.randomTextGenerator(50);
    const launchName = 'Demo Api Tests';
    let id: number;

    after(async () => {
        await FiltersService.deleteFilterById(id);
    });

    it('Create Filter with valid data', async () => {
        let res = await FiltersService.createUserFilter(filterName, description, launchName);
        id = res.data.id;

        expect(res.data).to.be.jsonSchema(createFilterValidResponseSchema, 'json response in not valid');
    });

    it('Create Filter with the same name', async () => {
        let res = await FiltersService.createUserFilter(filterName, description, launchName);

        expect(res.response.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.response.data).to.be.jsonSchema(createFilterErrorResponseSchema, 'json response in not valid');
    });
});

describe('Filter Service- Add Filter: Empty name', () => {
    const statusCode = 400;
    const filterName = '';
    const description = Utils.randomTextGenerator(50);
    const launchName = 'Demo Api Tests';

    it('Create Filter with Empty name', async () => {
        let res = await FiltersService.createUserFilter(filterName, description, launchName);

        expect(res.response.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.response.data).to.be.jsonSchema(createFilterErrorResponseSchema, 'json response in not valid');
    });
});

describe('Filter Service- Delete Filter: General case', () => {
    const statusCode = 200;
    const filterName = Utils.randomTextGenerator(10);
    const description = Utils.randomTextGenerator(50);
    const launchName = 'Demo Api Tests';
    let id: number;

    before(async () => {
        let res = await FiltersService.createUserFilter(filterName, description, launchName);
        id = res.data.id;
    });

    it('Delete Filter with valid id', async () => {
        let res = await FiltersService.deleteFilterById(id);
        expect(res.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.data).to.be.jsonSchema(deleteFilterValidResponseSchema, 'json response in not valid');
    });
});

describe('Filter Service- Delete Filter: Invalid id', () => {
    const statusCode = 404;
    const id = -1;

    it('Delete Filter with in`valid id', async () => {
        let res = await FiltersService.deleteFilterById(id);

        expect(res.response.status).to.equal(statusCode, `Status code is not ${statusCode}`);
        expect(res.response.data).to.be.jsonSchema(deleteFilterErrorResponseSchema, 'json response in not valid');
    });
});
