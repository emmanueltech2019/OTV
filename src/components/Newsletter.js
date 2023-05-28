import React from "react";

function Newsletter() {
  return (
    <>
      <section className="m-promotionalBanner enewsBanner">
        <img
          className="m-promotionalBanner__bgImage"
          src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2022-08/GettyImages-1164052842.jpeg"
          alt="California Winery"
        />
        <div className="m-promotionalBanner__overlay"></div>
        <div className="m-promotionalBanner__content ">
          <div className="m-promotionalBanner__content--heading">
            <h2>Subscribe to our Newsletter </h2>
            <h3>Sign up and get weekly travel inspiration and ideas</h3>
          </div>
          <div className="m-promotionalBanner__content--form">
            <form>
              <fieldset>
                <legend>Subscribe to our Newsletter</legend>
                <div className="m-promotionalBanner__content--form__inputs">
                  <div>
                    <label for="Zip">
                      <span>Postal Code</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="Zip"
                    id="Zip"
                    required=""
                    placeholder="Postal Code"
                    // aria-label="Postal Code"
                    // value=""
                  />
                  <div>
                    <label for="Email">
                      <span>Email Address</span>
                    </label>
                  </div>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    required=""
                    placeholder="Email Address"
                    // aria-label="Email Address"
                    // value=""
                  />
                  <div>
                    <label for="submit">
                      <span>Submit</span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    // aria-label="Submit"
                    // value="Submit"
                  />
                </div>
                <div className="m-promotionalBanner__content--form__consent">
                  <div className="m-promotionalBanner__content--form__consent--checkbox">
                    <div>
                      <label for="Email">
                        <span>Email Address</span>
                      </label>
                    </div>
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      required=""
                      placeholder="Email Address"
                    //   aria-label="Email Address"
                    //   value=""
                    />
                    <select hidden="">
                      <option value="AU">Australia</option>
                      <option value="BR">Brazil</option>
                      <option value="CA">Canada</option>
                      <option value="CN">China</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IN">India</option>
                      <option value="IT">Italy</option>
                      <option value="MX">Mexico</option>
                      <option value="KR">South Korea</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US" selected="">
                        United States
                      </option>
                      <option value="">Others</option>
                    </select>
                    <div>
                      <label for="submit">
                        <span>Submit</span>
                      </label>
                    </div>
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                    //   aria-label="Submit"
                    //   value="Submit"
                    />
                  </div>
                  <div className="m-promotionalBanner__content--form__consent">
                    <div className="m-promotionalBanner__content--form__consent--checkbox">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        required=""
                        // aria-label="I agree and consent to receive&nbsp;emails from Visit California and its partners with special offers and exclusive content and that I am at least 18 years old"
                        // value="I consent"
                      />
                      <div>
                        <label for="consent">
                          <span>
                            I agree and consent to receive&nbsp;emails from
                            Visit California and its partners with special
                            offers and exclusive content and that I am at least
                            18 years old
                          </span>
                        </label>
                      </div>
                      <span className="checkmark"></span>
                      <p>
                        I agree and consent to receive&nbsp;emails from Visit
                        California and its partners with special offers and
                        exclusive content and that I am at least 18 years old
                      </p>
                    </div>
                    <div className="m-promotionalBanner__content--form__consent--privacy">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/privacy-policy/"
                      >
                        Privacy Policy
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          className="a-icon a-icon--xsmall "
                          aria-label="L"
                          style="fill: rgb(255, 255, 255);"
                        >
                          <use xlink:href="/assets/svg/sprite.svg#ico-caret-right-thick"></use>
                        </svg> */}
                      </a>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="m-promotionalBanner__modalContainerOuter">
          <div className="hidden">
            <div className="m-promotionalBanner__modalContainerInner">
              <h2>Thank you for signing up</h2>
              <p>Get ready to Dream Big!</p>
              <button type="button">Close</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
