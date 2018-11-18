import { trigger, state, style, animate, transition } from '@angular/animations';

export const toggleCategoryButton = trigger('toggleCategoryMenu',[
  state('visible', style({
    display: 'block', opacity: '1'
  })),
  state('hidden', style({
    display: 'none', opacity: '0'
  })),
  state('rotate45', style({
    transform: 'rotate(45deg)'
  })),
  state('visible-btn1', style({
    opacity: '1',
    transform: 'rotate(20deg) translate(-130px) rotate(-20deg)'
  })),
  state('visible-btn2', style({
    opacity: '1',
    transform: 'rotate(55deg) translate(-130px) rotate(-55deg)'
  })),
  state('visible-btn3', style({
    opacity: '1',
    transform: 'rotate(90deg) translate(-130px) rotate(-90deg)'
  })),
  state('visible-btn4', style({
    opacity: '1',
    transform: 'rotate(125deg) translate(-130px) rotate(-125deg)'
  })),
  state('visible-btn5', style({
    opacity: '1',
    transform: 'rotate(160deg) translate(-130px) rotate(-160deg)'
  })),
  transition('* <=> hidden', [
    animate('.3s')
  ]),
  transition('* <=> rotate45', [
    animate('.2s')
  ])
])