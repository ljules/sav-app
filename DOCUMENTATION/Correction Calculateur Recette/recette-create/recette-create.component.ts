import { Component } from '@angular/core';
import { SimulateurServiceService } from '../../services/simulateur-service.service';
import { RecetteDTO } from '../../models/recetteDTO';
import { Ingredient } from '../../models/ingredient';
import { LigneIngredient } from '../../models/ligneIngredient';


@Component({
  selector: 'app-recette-create',
  templateUrl: './recette-create.component.html',
  styleUrl: './recette-create.component.css'
})
export class RecetteCreateComponent {
recetteDTO:RecetteDTO;
ingredientIdSelect:number|null = null
listeIngredients:Ingredient[]=[];
isLoading: boolean = true;
errorMessage: string = '';

  constructor(private simulateurService: SimulateurServiceService) {
    this.recetteDTO=new RecetteDTO()
  }

  ngOnInit(): void {
    this.fetchIngredients()
  }

ajoutLigne():void{
  console.log(this.ingredientIdSelect)
  if(this.ingredientIdSelect!=null){
    let nouvelleLigne= new LigneIngredient()
    nouvelleLigne.ingredient=this.listeIngredients.find((ing)=>ing.id==this.ingredientIdSelect)!!
    nouvelleLigne.ingredientId = this.ingredientIdSelect ?? null
    this.recetteDTO.ligneIngredients.push(nouvelleLigne)
    console.log(this.recetteDTO.ligneIngredients)
    this.ingredientIdSelect=null
  }
}

  fetchIngredients(): void {
      this.simulateurService.getAllIngredient().subscribe({
        next: (data: Ingredient[]) => {
          console.log(data)
          this.listeIngredients = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération la liste des ingredients', error);
          this.errorMessage = 'Impossible de charger les ingredients. Veuillez réessayer plus tard.';
          this.isLoading = false;
        }
      });
    }

    submitRecette(){
      this.simulateurService.postRecette(this.recetteDTO).subscribe(
        {
          next:(res)=>{
            console.log(res)
          }
        }
      )
    }

    majPourcentages(){
      let quantiteTotal=0
      for(let uneLigne of this.recetteDTO.ligneIngredients){
        quantiteTotal+=uneLigne.quantite
      }
      for(let uneLigne2 of this.recetteDTO.ligneIngredients)
      {
        uneLigne2.pourcentage=uneLigne2.quantite/(quantiteTotal/100)
      }
    }
}
