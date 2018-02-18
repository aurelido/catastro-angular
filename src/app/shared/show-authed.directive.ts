import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
  } from '@angular/core';

import { UserService } from './services/user.service';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
) {}

condition: boolean;

ngOnInit() {
    this.userService.isAuthenticated.subscribe(
        (isAuthenticated) => {
            this.show(isAuthenticated);
        }
    );
}

private show(isAuthenticated: boolean) {
    if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}

@Input() set showAuthed(condition: boolean) {
    this.condition = condition;
}

}
