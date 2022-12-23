import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUsersInfo } from "../states/usersInfo";

const MobileUsersInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersInfo());
  }, []);

  const usersInfo = useSelector((state) => state.usersInfo);
  return (
    <>
      {usersInfo.map((data) => {
        const parsedDate = data.joinedDate.split("T")[0];

        if (data.status === "UNVERIFIED") {
          return (
            <>
              <div className="usersinfo">
                <MobileRowUnverified>
                  <VerifiedLine />
                  <StatusUnverified>
                    <img src="unverified.svg"></img>
                  </StatusUnverified>

                  <Details>
                    <p>
                      {data.userName} | age {data.age}{" "}
                    </p>
                    <p>
                      Email: <span>{data.email}</span>
                    </p>
                    <p>
                      Role: <span>{data.role}</span>
                    </p>
                    <p>
                      Joined Date:<span> {parsedDate}</span>
                    </p>
                  </Details>

                  <SendMessageButton />
                </MobileRowUnverified>
              </div>
            </>
          );
        } else {
          return (
            <>
              {" "}
              <div className="usersinfo">
                <MobileRow>
                  <UnverifiedLine />
                  <StatusVerified>
                    {" "}
                    <img src="verified.svg"></img>
                  </StatusVerified>
                  <Details>
                    <p>
                      {data.userName} | age {data.age}{" "}
                    </p>
                    <p>
                      Email: <span>{data.email}</span>
                    </p>
                    <p>
                      Role: <span>{data.role}</span>
                    </p>
                    <p>
                      Joined Date: <span>{parsedDate}</span>
                    </p>
                  </Details>

                  <SendMessageButton />
                </MobileRow>
              </div>{" "}
            </>
          );
        }
      })}
    </>
  );
};

const MobileRow = styled.div`
  position: relative;
  width: 315px;
  height: 102px;
  background-color: rgba(57, 181, 74, 0.1);
  border-radius: 20px;
  display: flex;

  p {
    font-family: "Heebo";
    font-style: bold;
    font-size: 14px;
    line-height: 21px;
    /* margin-left: 19px; */
  }
  span {
    font-weight: 400;
  }
`;

const MobileRowUnverified = styled.div`
  position: relative;
  width: 315px;
  height: 102px;
  background-color: rgba(230, 21, 135, 0.1);
  border-radius: 20px;
  display: flex;

  p {
    font-family: "Heebo";
    font-style: bold;
    font-size: 14px;
    line-height: 21px;
    /* margin-left: 19px; */
  }
  span {
    font-weight: 400;
  }
`;

const SendMessageButton = styled.button`
  position: absolute;
  left: 250px;
  top: 40px;
  width: 32px;
  height: 32px;
  border-radius: 30px;
  border: solid 1px rgba(68, 68, 68, 0.25);
  background-color: white;
`;

const VerifiedLine = styled.div`
  position: relative;
  top: 20px;
  background-color: rgba(230, 21, 135, 1);
  width: 4px;
  height: 60px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const UnverifiedLine = styled.div`
  position: relative;
  top: 20px;
  background-color: rgba(57, 181, 74, 1);
  width: 4px;
  height: 60px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Details = styled.div`
  position: relative;
  top: 0px;
  left: 19px;
`;

const StatusVerified = styled.div`
  position: absolute;
  top: 10px;
  left: 220px;
  border-radius: 10px;
`;

const StatusUnverified = styled.div`
  position: absolute;
  top: 10px;
  left: 220px;
  border-radius: 10px;
`;
export default MobileUsersInfo;
