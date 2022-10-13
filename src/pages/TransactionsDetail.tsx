
import AnnualPermits from "../components/AnnualPermits";
import MeetingRoom from "../components/MeetingRoom";
import SuggestYourFriend from "../components/SuggestYourFriend";
import ThankYourFriends from "../components/ThankYourFriends";

const pageEnum = {
    annualPermits: 'annualPermits',
    meetingRoom: 'meetingRoom',
    suggestYourFriend: 'suggestYourFriend',
    thankYourFriends: 'thankYourFriend'
};

const GetComponent = (item) => {  
    var pageName = item.name;
    if (pageName == pageEnum.annualPermits) {
        return <AnnualPermits />
    }
    else if (pageName == pageEnum.meetingRoom) {
        return <MeetingRoom />
    }
    else if (pageName == pageEnum.suggestYourFriend) {
        return <SuggestYourFriend />
    }
    else if (pageName == pageEnum.thankYourFriends) {
        return <ThankYourFriends />
    }
    else return null;
}

const TransactionsDetail = (props) => {
    const pageName = props.route.params.name as string;
    const pageTitle = props.route.params.pageTitle as string;
    props.navigation.setOptions({ title: pageTitle });
    return (
        <>
            <GetComponent name={pageName}></GetComponent>
        </>
    );
}
export default TransactionsDetail;

