import React,{Component, component} from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../component/Layout';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component{

    static async getInitialProps(props){
        const {address} = props.query;

        const campaign = Campaign(address);
        const requestsCount = await campaign.methods.getRequestsCount().call();
        const requests = await promise.all(Array(parseInt(requestsCount)).fill().map((element,index)=>{
            return campaign.methods.requests(index).call();
        }));
        //console.log(requests);
        return {address , requests , requestsCount};
    }

    render(){
        return (
        <Layout>
        <h3> reqs </h3>
        <Link route = {'/campaigns/${this.props.address}/requests/new'}>
        <a>
            <Button primary > add requests</Button>
        </a>

        </Link>
        </Layout>
        );
    }
}

export default RequestIndex;