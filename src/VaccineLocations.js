import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Avatar } from "@progress/kendo-react-layout";

const dataUrl = "https://www.vaccinespotter.org/api/v0/states.json";

function VaccineLocations() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getDataWithFetch();
  }, []);

  const getDataWithFetch = async () => {
    const response = await fetch(dataUrl);

    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Covid-19 Vaccination Locations</h2>
      </header>

      {
       userData && 
       userData.length > 0 && 
       userData.map((item)=> (

            <Card
              style={{
                width: "100%",
                boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
                marginTop: "15px",
              }}
            >
              <CardHeader
                className="k-hbox"
                style={{
                  background: "lightblue",
                }}
              >

                <Avatar type="initials" size="medium" shape="circle">
                  <span>{item.code}</span>
                </Avatar>


                <div>
                  <CardTitle
                    style={{
                      marginBottom: "4px",
                    }}
                  >
                    {item.name}
                  </CardTitle>

                  <CardSubtitle>
                    <p>Store count: {item.store_count}</p>
                  </CardSubtitle>
                </div>
              </CardHeader>

              {item.provider_brands && (
                <CardBody>
                  <div>
                    <div
                      style={{
                        marginBottom: "8px",
                        padding: "0 16px",
                      }}
                    >
                      {item.provider_brands.map((comment, index) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            key={index}
                          >
                            <div
                              style={{
                                padding: "4px 0",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    wordBreak: "break-all",
                                  }}
                                >
                                  {comment.key}
                                </span>


                                <span
                                  style={{
                                    fontSize: "13px",
                                    wordBreak: "break-all",
                                  }}
                                >
                                  Store count: {comment.location_count}
                                </span>

                                <span className="time">
                                  
                                  <span
                                    style={{
                                      marginLeft: "8px",
                                    }}
                                  >
                                    <a href={comment.url}>{comment.url}</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </CardBody>
              )}
            </Card>
       ))
      }

    </div>
  );
}

export default VaccineLocations;
