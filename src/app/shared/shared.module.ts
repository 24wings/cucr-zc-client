import { NgModule, ModuleWithProviders } from "@angular/core";
import {
  DxDataGridModule,
  DxTreeListModule,
  DxPopupModule,
  DxSwitchModule,
  DxButtonModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxHtmlEditorModule,
  DxTemplateDirective,
  DxTemplateHost,
  DxTemplateModule,
  DxTagBoxModule,
  DxMenuModule,
  DxCheckBoxModule,
  DxNavBarModule,
  DxToolbarModule
} from "devextreme-angular";
import { CommonModule } from "@angular/common";
import { HostService } from "./services/host.service";
import { DbService } from "./services/db.service";
import { SqlMapService } from "./services/sqlmap.service";
import { SingleCardModule } from "../layouts/single-card/single-card.component";

@NgModule({
  imports: [
    DxTagBoxModule,
    CommonModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxTreeListModule,
    DxPopupModule,
    DxSwitchModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxTemplateModule,
    SingleCardModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxNavBarModule,
    DxToolbarModule
  ],
  exports: [
    DxTagBoxModule,
    DxDataGridModule,
    DxTreeListModule,
    DxPopupModule,
    DxSwitchModule,
    DxButtonModule,
    CommonModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxTemplateModule,
    SingleCardModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxNavBarModule,
    DxToolbarModule
  ],
  declarations: [],
  providers: [HostService, SqlMapService, DbService, DxTemplateHost]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HostService, DbService, SqlMapService]
    };
  }
}
