import Data from '@/store/modules/data/index';
import http from './http/index';
import apiDWS from '@/api/dws/index';
import apiTCS from '@/api/tcs/index';

const s = Data.types.state;

const initList = [
	{
		request: apiDWS.servers.getAll,
		entity: s.SERVERS
	},
	{
		request: apiDWS.providers.getAll,
		entity: s.PROVIDERS
	},
	{
		request: apiDWS.providersTypes.getAll,
		entity: s.PROVIDERS_TYPES
	},
	{
		request: apiDWS.providersAccounts.getAll,
		entity: s.PROVIDERS_ACCOUNT
	},
	{
		request: apiDWS.domains.getAll,
		entity: s.DOMAINS
	},
	{
		request: apiDWS.domainRecordsTypes.getAll,
		entity: s.DOMAINS_RECORDS_TYPES
	},
	{
		request: apiDWS.resources.getAll,
		entity: s.RESOURCES
	},
	{
		request: apiDWS.resourcesTypes.getAll,
		entity: s.RESOURCES_TYPES
	},
	{
		request: apiTCS.countries.getAll,
		entity: s.COUNTRIES
	}
];

function initData () {
	initList.forEach(i => {
		http.get(i.request)
			.then(data => {
				Data.mutations[Data.types.mutations.SET_DATA_AT_INITIALIZATION]({
					data: data.result,
					entity: i.entity
				});
			});
	});
}

export default initData;
