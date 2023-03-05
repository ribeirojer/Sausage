import React from "react";

type Props = {};

const Team = (props: Props) => {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Our Team
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mx-auto mb-10 w-full max-w-[370px]">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="absolute bottom-5 left-0 w-full text-center">
                  <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                    <h3 className="text-dark text-base font-semibold">
                      Coriss Ambady
                    </h3>
                    <p className="text-body-color text-sm">Web Developer</p>
                    <div>
                      <span className="absolute left-0 bottom-0">
                        <svg
                          width="61"
                          height="30"
                          viewBox="0 0 61 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="45"
                            r="45"
                            fill="#13C296"
                            fill-opacity="0.11"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mx-auto mb-10 w-full max-w-[370px]">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="absolute bottom-5 left-0 w-full text-center">
                  <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                    <h3 className="text-dark text-base font-semibold">
                      Glorius Cristian
                    </h3>
                    <p className="text-body-color text-sm">App Developer</p>
                    <div>
                      <span className="absolute left-0 bottom-0">
                        <svg
                          width="61"
                          height="30"
                          viewBox="0 0 61 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="45"
                            r="45"
                            fill="#13C296"
                            fill-opacity="0.11"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mx-auto mb-10 w-full max-w-[370px]">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="absolute bottom-5 left-0 w-full text-center">
                  <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                    <h3 className="text-dark text-base font-semibold">
                      Jackie Sanders
                    </h3>
                    <p className="text-body-color text-sm">UI/UX Designer</p>
                    <div>
                      <span className="absolute left-0 bottom-0">
                        <svg
                          width="61"
                          height="30"
                          viewBox="0 0 61 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="45"
                            r="45"
                            fill="#13C296"
                            fill-opacity="0.11"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/4">
            <div className="mx-auto mb-10 w-full max-w-[370px]">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                  alt="image"
                  className="w-full"
                />
                <div className="absolute bottom-5 left-0 w-full text-center">
                  <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                    <h3 className="text-dark text-base font-semibold">
                      Nikolas Brooten
                    </h3>
                    <p className="text-body-color text-sm">Sales Manager</p>
                    <div>
                      <span className="absolute left-0 bottom-0">
                        <svg
                          width="61"
                          height="30"
                          viewBox="0 0 61 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="45"
                            r="45"
                            fill="#13C296"
                            fill-opacity="0.11"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
