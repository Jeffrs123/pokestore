// import { trigger, state, style, animate, transition } from '@angular/animations';
import { trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';
export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}

export function visibility1() {
    return trigger('visibility1', [
        state('hidden', style({
            // transform: 'scale(0.5)',
            transform: 'translateX(60%)',
            opacity: 0,
            height: '0px'
        })),
        state('shown', style({
            // transform: 'scale(1.0)',
            transform: 'translateX(0%)',
            opacity: 1,
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}

export function flyInOutY() {
    return trigger('flyInOutY', [
        state('*', style({ opacity: 1, transform: 'translateY(0)' })),
        transition(
            ':enter', [
                style({
                    // transform: 'translateX(-100%)',
                    transform: 'translateY(-10%)',
                    // transform: 'scale(0.0)',
                    opacity: 0 ,
                    // position: 'top'
                }),
                animate('300ms ease-in')
            ]
        ),
        transition(
            ':leave', [
                animate('500ms ease-out',
                    style({
                        // transform: 'translateX(100%)',
                        // transform: 'translateY(100%)',
                        transform: 'translateY(0)',

                        // transform: 'scale(1)',
                        opacity: 0 ,
                        // position: 'top'
                    })
                )
            ]
        )
    ]);
}

export function flyInOutX() {
    return trigger('flyInOutX', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(
            ':enter', [
                style({
                    // transform: 'translateX(-100%)',
                    transform: 'translateX(-100%)',
                    // transform: 'scale(0.0)',
                    opacity: 0 ,
                    // position: 'top'
                }),
                animate('300ms ease-in')
            ]
        ),
        transition(
            ':leave', [
                animate('500ms ease-out',
                    style({
                        // transform: 'translateX(100%)',
                        transform: 'translateX(100%)',
                        // transform: 'scale(1)',
                        opacity: 0 ,
                        // position: 'top'
                    })
                )
            ]
        )
    ]);
}

export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-10%)', opacity: 0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}

export function isOpen() {
    return trigger('openClose', [
        state('open', style({
            opacity: 1,
            backgroundColor: 'yellow'
        })),
        state('closed', style({

            height: '0px',
            display: 'inline-block',
            opacity: 0.0,
            backgroundColor: 'red'
        })),
        transition('* => *', [
            animate('1s', keyframes([
                style({ opacity: 0.1, offset: 0.1 }),
                style({ opacity: 0.6, offset: 0.2 }),
                style({ opacity: 1, offset: 0.5 }),
                style({ opacity: 0.2, offset: 0.7 })
            ]))
        ])
    ]);
}
