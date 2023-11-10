const blogCard = () =>{
    return(
        <div className="swiper-slide">
                  <blockquote className="flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]">
                    <div className="">
                      <img className="RightCardPic w-full" src={bus01} alt="" />
                      <h4 className="RightCardTitle">
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className="RightCardText">
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
                      </p>
                      <div className="RightCardFooter flex justify-between align-middle mt-2">
                        <div className="flex justify-center align-middle">
                          <img
                            className="RightCardFooterImg mr-3"
                            src={user01}
                            alt="user01"
                          />
                          <p className="RightCardFooterTitle">
                            Olivia Thomas <br />{" "}
                            <span className="RightCardFooterDate">
                              20 Jan, 2023
                            </span>
                          </p>
                        </div>
                        <div className="my-auto">
                          <img src={share01} alt="share01" />
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
    );
};
export default blogCard;