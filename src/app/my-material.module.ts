import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule } from '@angular/material';
@NgModule({
    imports: [BrowserAnimationsModule, MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule,MatListModule,
        MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule, MatTooltipModule, MatSelectModule],
    exports: [BrowserAnimationsModule, MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule,MatListModule,
        MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule, MatTooltipModule, MatSelectModule],
})
export class MyMaterialModule {
}