import React from "react";
function createSchedule() {
  return (
      <form className="create-schedule-container">
        <section className="create-schedule">
          <div className="create-schedule__container-1">
            <div className="galv-type">
              <input type="radio" id="girs" name="galv-type" value="girs" />
              <label htmlFor="girs">GI/RS</label> <br />
              <input type="radio" id="gizs" name="galv-type" value="gizs" />
              <label htmlFor="gizs">GI/ZS</label> <br />
              <input type="radio" id="ga" name="galv-type" value="ga" />
              <label htmlFor="ga">GA</label> <br />
            </div>
            <div className="export">
              <input type="radio" id="all" name="export" value="all" />
              <label htmlFor="all">All</label> <br />
              <input type="radio" id="export" name="export" value="export" />
              <label htmlFor="export">Export</label> <br />
              <input
                type="radio"
                id="domestic"
                name="export"
                value="domestic"
              />
              <label htmlFor="domestic">Domestic</label> <br />
            </div>
            <div className="product-type">
              <input type="radio" id="c11" name="product-type" value="c11" />
              <label htmlFor="c11">C11</label> <br />
              <input type="radio" id="c10" name="product-type" value="c10" />
              <label htmlFor="c10">C10</label> <br />
              <input type="radio" id="c03" name="product-type" value="c03" />
              <label htmlFor="c03">C03</label> <br />
            </div>
            <div className="coil-dimensions">
              <section className="thickness">
                <h3>Thickness</h3>
                <input type="text" id="thick-from" name="thickness from" placeholder="From" />{" "}
                <br />
                <input type="text" id="thick-to" name="thickness to" placeholder="To"/>
              </section>
              <section className="width">
                <h3>Width</h3>
                <input type="text" id="width-from" name="width from" placeholder="From"/> <br />
                <input type="text" id="width-to" name="width to" placeholder="To"/>
              </section>
            </div>
            <div className="idia-sleeve">
              <label htmlFor="idia">Idia</label>
              <select name="Idia" id="idia">
                <option>op 1</option>
                <option>op 2</option>
                <option>op 3</option>
                <option>op 4</option>
                <option>op 5</option>
              </select>{" "}
              <br />
              <label htmlFor="sleeve">Sleeve</label>
              <select name="sleeve" id="sleeve">
                <option>op 1</option>
                <option>op 2</option>
                <option>op 3</option>
                <option>op 4</option>
                <option>op 5</option>
              </select>
            </div>{" "}
            <br />
          </div>
          <div className="create-schedule__container-2">
            <div>
              <input type="radio" id="fp" name="fp-check" value="fp" />
              <label htmlFor="fp">FP</label> <br />
              <input type="radio" id="not-fp" name="fp-check" value="not fp" />
              <label htmlFor="not-fp">Not in FP</label>
            </div>

            <div>
              <label htmlFor="grade">Grade</label>
              <select name="grade" id="grade">
                <option>op 1</option>
                <option>op 2</option>
                <option>op 3</option>
                <option>op 4</option>
                <option>op 5</option>
              </select>
            </div>
            <div>
              <label htmlFor="quality">Quality</label>
              <select name="quality" id="quality">
                <option>op 1</option>
                <option>op 2</option>
                <option>op 3</option>
                <option>op 4</option>
                <option>op 5</option>
              </select>
            </div>
            <div>
              <label htmlFor="tdc">TDC</label>
              <select name="tdc" id="tdc">
                <option>op 1</option>
                <option>op 2</option>
                <option>op 3</option>
                <option>op 4</option>
                <option>op 5</option>
              </select>
            </div>
            <div>
              <label htmlFor="post-treat">Post Treat</label>
              <select name="treat" id="treat">
                <option>op 1</option>
                <option>op 2</option>
                <option>op 3</option>
                <option>op 4</option>
                <option>op 5</option>
              </select>
            </div>
            <button>Create Schedule</button>
          </div>
        </section>
      </form>
  );
}

export default createSchedule;