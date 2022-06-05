import React from "react";
import foto from "../photo-8/IMG_3556.jpg";
import "../styles/MainHome.css";
import "../styles/cube1.css"
import "../styles/cube2.css"

const MainHome = () => {
  return (
    <React.Fragment>
      <div className="base">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nihil quod autem? Consequuntur quidem natus nisi deserunt nihil
          tempora, delectus in et, expedita repudiandae explicabo quibusdam!
          Sint mollitia aliquam soluta? Non incidunt distinctio quia aspernatur
          nulla error esse temporibus vero nisi, tempore ab iste excepturi,
          minima illo, quos et? Rerum magni earum sed atque libero facilis.
          Obcaecati quae consequuntur architecto voluptas iusto nobis natus
          officia assumenda amet eos quam rerum impedit, veritatis facere
          similique! Aperiam, asperiores velit ipsa, ut delectus est ducimus
          sapiente culpa nesciunt repudiandae laudantium optio nisi, voluptate
          quis aut porro cum quas. Necessitatibus aliquam officiis commodi nulla
          sit cupiditate quia voluptas amet reprehenderit aspernatur ipsa
          eveniet consectetur illum veritatis, cum repellendus perferendis,
          nostrum et. Quam vero error, molestias ratione ullam, sequi ducimus
          porro pariatur asperiores quo beatae ipsa necessitatibus.
        </p>
        <div className="tourne">
        <div id="carre1">
        <div class="cube1">
          <div class="side1" id="front1"></div>
          <div class="side1" id="bottom1"></div>
          <div class="side1" id="top1"></div>
          <div class="side1" id="left1"></div>
          <div class="side1" id="right1"></div>
          <div class="side1" id="back1"></div>
        </div>
      </div>
      <div id="carre2">
        <div class="cube2">
          <div class="side2" id="front2"></div>
          <div class="side2" id="bottom2"></div>
          <div class="side2" id="top2"></div>
          <div class="side2" id="left2"></div>
          <div class="side2" id="right2"></div>
          <div class="side2" id="back2"></div>
        </div>
      </div>
      </div>
        <img className="fotosite" src={foto} alt="les champs élysées" />
        </div>
    </React.Fragment>
  );
};

export default MainHome;
