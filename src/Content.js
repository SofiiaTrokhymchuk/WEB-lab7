import React, { Component } from "react";
import "./css/Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawingIsYellow: true,
      photographingIsBlue: true,
    };
    this.changeBackgroundDrawing = this.changeBackgroundDrawing.bind(this);
    this.changeBackgroundPhotographing =
      this.changeBackgroundPhotographing.bind(this);
  }

  changeBackgroundDrawing() {
    this.setState({
      drawingIsYellow: !this.state.drawingIsYellow,
    });
  }

  changeBackgroundPhotographing() {
    this.setState({
      photographingIsBlue: !this.state.photographingIsBlue,
    });
  }

  render() {
    return (
      <main className="Content">
        <h3>Хоббі:</h3>
        <ul>
          <li>Книги</li>
          <li>
            <span
              className={this.state.drawingIsYellow ? "yellow" : "blue"}
              onClick={this.changeBackgroundDrawing}
            >
              Малювання
            </span>
          </li>
          <li>
            <span
              className={this.state.photographingIsBlue ? "blue" : "yellow"}
              onClick={this.changeBackgroundPhotographing}
            >
              Фотографії
            </span>
          </li>
        </ul>
        <h3>Улюблені книги/фільми:</h3>
        <ol>
          <li>
            Марсіянин (<em>книга</em>)
          </li>
          <li>
            Аватар (<em>фільм</em>)
          </li>
          <li>
            Артеміда (<em>книга</em>)
          </li>
        </ol>
        <h3>Улюблене місто:</h3>
        <p>
          <strong>Київ</strong> – столиця України та одне з найстаріших міст
          Європи, засноване щонайменше 1500 років тому. Сучасне європейське
          місто здатне здивувати будь-кого – від любителів природної краси,
          архітектури та визначних пам'яток до тих, хто віддає перевагу більш
          насиченому та активному відпочинку.
        </p>
      </main>
    );
  }
}

export default Content;
