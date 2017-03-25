import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {PostsDatatableComponent} from './posts-datatable.component';

@NgModule({
  imports: [MaterialModule, NgxDatatableModule],
  declarations: [PostsDatatableComponent],
  exports: [PostsDatatableComponent]
})
export class PostsDatatableModule {
}
