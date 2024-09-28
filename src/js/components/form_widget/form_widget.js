import { luhnCheck } from "../card_validation/card_validation.js";
import { cardTypes } from "../card_types/types_validator.js";

export class FormWidget {
  constructor(element) {
    if (typeof element === "string") {
      this._element = document.querySelector(element);
    }
    this.cards = document.querySelectorAll(".card");

    this.bindTooltip = this.bindTooltip.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get markup() {
    return `
        <input class="form-control" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="" aria-describedby="tooltip313319">
        <button id="submitform" class="btn">Click to Validate</button>
        `;
  }

  static get inputAreaSelector() {
    return ".form-control";
  }

  static get submitSelector() {
    return ".btn";
  }

  bindTooltip() {
    this._element.innerHTML = FormWidget.markup;

    this.inputArea = this._element.querySelector(FormWidget.inputAreaSelector);

    this.submit = this._element.querySelector(FormWidget.submitSelector);

    this._element.addEventListener("submit", this.onSubmit);
    this.inputArea.addEventListener("input", this.onInput);
  }

  onSubmit(e) {
    e.preventDefault();

    const input = this.inputArea.value;

    if (luhnCheck(input)) {
      this.submit.classList.add("btn-success");
      this.submit.classList.remove("btn-failed");
    } else {
      this.submit.classList.add("btn-failed");
      this.submit.classList.remove("btn-success");
    }

    this._element.reset();
    this.cards.forEach((c) => {
      c.classList.remove("disabled");
    });
  }

  onInput(e) {
    e.preventDefault();

    if (this._timout) {
      clearTimeout(this.this_timout);
    }
    const val = this.inputArea.value;
    if (!val) {
      this.cards.forEach((c) => {
        c.classList.remove("disabled");
      });
    }
    this._timout = setTimeout(() => {
      const card = cardTypes(val);
      if (card) {
        this.cards.forEach((c) => {
          if (!c.classList.contains(card)) {
            c.classList.add("disabled");
          }
        });
      }
    }, 100);
  }
}
