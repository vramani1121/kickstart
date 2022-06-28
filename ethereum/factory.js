import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(campaignFactory.interface),"0x586867B70782F4DF7F4d8a06e5a371A2c8E4aEFc");

export default instance;