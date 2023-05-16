import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreService } from 'src/app/core/core.service';
import { Epi } from 'src/app/services/post.service';
@Component({
  selector: 'app-consult-by-area',
  templateUrl: './consult-by-area.component.html',
  styleUrls: ['./consult-by-area.component.scss']
})
export class ConsultByAreaComponent {
  areas: any[]= [];
  epis:any[]= [];
  selectedEpi: any;
  newEpiLabel: string = '';
  showAddAreaForm = false;
newAreaName: string = '';

  
  constructor(private http: HttpClient, private core:CoreService ) {
    
  }
  ngOnInit() {
    this.getAreas().subscribe(data => {
      this.areas = data;
    });
    this.getEpis().subscribe(data => {
      this.epis = data;
    });
  }
  
  
  getAreas() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/areas');
  }
  getEpis(){
    return this.http.get<any[]>('http://127.0.0.1:8000/api/epis');
  }
  deleteArea(id: number) {
    this.http.delete("http://127.0.0.1:8000/api/deletearea/" + id).subscribe((resultData: any) => {
      console.log(resultData);
      this.core.openSnackBar('area deleted!', 'done');
    });
  }
  deleteEpi(areaId: number, epiId: number) {
    this.http.delete(`http://127.0.0.1:8000/api/areas/${areaId}/epis/${epiId}`).subscribe((resultData: any) => {
      console.log(resultData);
      // Find the area in the array and remove the deleted episode from its epis array
      const area = this.areas.find(p => p.id === areaId);
      area.epis = area.epis.filter((e: Epi) => e.id !== epiId);
      this.core.openSnackBar('PEE deleted!', 'done');
    });
  }  
  addEpi(area: any, newEpiLabel: string) {
    const selectedEpi = this.epis.find((epi: Epi) => {
      return epi.label === newEpiLabel;
    });
  
    if (selectedEpi) {
      const epiId = selectedEpi.id;
  
      // Check if the selected episode already exists in the area's epis array
      const existingEpi = area.epis.find((epi: Epi)  => epi.id === epiId);
      if (existingEpi) {
        // Episode already exists in the area's epis array
        this.core.openSnackBar('PEE already exists!', 'warning');
        return;
      }
  
      // Perform the necessary logic to add the epi to the area
      // For example, you can make an HTTP request to your API
  
      this.http
        .post(`http://127.0.0.1:8000/api/areas/${area.id}/epis`, { epiId })
        .subscribe(
          (resultData: any) => {
            console.log(resultData);
            // Update the area's epis array with the new epi
            area.epis.push(selectedEpi);
  
            // Reset the newEpiLabel value for the area
            area.newEpiLabel = '';
  
            // Display a success message or perform any other necessary action
            this.core.openSnackBar('PEE added!', 'done');
          },
          (error: any) => {
            // Handle the error appropriately
            console.error(error);
            this.core.openSnackBar('Error adding PEE', 'error');
          }
        );
    }
  }
  
  addArea(areaName: string) {
    // Check if a area with the same name already exists
    const existingarea = this.areas.find(area => area.area_name === areaName);
    if (existingarea) {
      this.core.openSnackBar('area with the same name already exists!', 'warning');
      return;
    }
  
    const newArea = {
      area_name: areaName,
      epis: [],
      newEpiLabel: '', // Add the newEpiLabel property for the new area
    };
  
    this.http.post('http://127.0.0.1:8000/api/areas/create', newArea).subscribe(
      (resultData: any) => {
        console.log(resultData);
        // Add the new area to the areas array
        this.areas.push(resultData);
  
        // Display a success message or perform any other necessary action
        this.core.openSnackBar('Area added!', 'done');
      },
      (error: any) => {
        // Handle the error appropriately
        console.error(error);
        this.core.openSnackBar('Error adding area', 'error');
      }
    );
  }
  
  hideAddAreaForm(){
    this.showAddAreaForm = false;
  }
}
