import styled from "styled-components";
const CardSubscription = ({ info }) => {
  const CardSubscriptionContainer = styled.div`
    :hover {
      cursor: pointer;
    }
  `;
  return (
    <CardSubscriptionContainer className="card col-lg-3 col-md-6">
      <div className="d-flex align-items-center  ">
        {info.icon}
        <div className="px-3">
          <span className="text-muted fs-6">Listen on</span>
          <br />
          <span className="  fs-4 lh-1">{info?.text}</span>
        </div>
      </div>
    </CardSubscriptionContainer>
  );
};

export default CardSubscription;
