import { trigger, style, animate, transition } from '@angular/animations';

export const addListItem = trigger("addListItem", [
  transition(":enter", [
    style({ transform: "scale(0.5)", opacity: "0" }),
    animate(
      "1s cubic-bezier(.8, -0.6, 0.2, 1.5)",
      style({ transform: "scale(1)", opacity: "1" })
    )
  ]),
  transition(":leave", [
    style({ transform: "scale(1)", opacity: 1, height: "*" }),
    animate(
      ".3s ease-in",
      style({
        transform: "scale(0.5)",
        opacity: 0,
        height: "0px",
        margin: "0px"
      })
    )
  ])
])