import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/Ingredient';
import { LigneIngredient } from '../../../models/LigneIngredient';
import { RecetteDTO } from '../../../models/RecetteDTO';
import { IngredientService } from '../../../services/ingredient.service';
import { RecetteService } from '../../../services/recette.service';

@Component({
  selector: 'app-recipe-calculator-page',
  templateUrl: './recipe-calculator-page.component.html',
  styleUrl: './recipe-calculator-page.component.css'
})
export class RecipeCalculatorPageComponent implements OnInit {
    ingredients: Ingredient[] = []; // Liste des ingrédients mis à disposition par l'API
    isLoading:  boolean = true;     // Flag marquant la récupération des données
    errorMessage: string = "";      // Eventuel message d'erreur
    recetteDTO: RecetteDTO;
    ingredientIdSelect: number | null = null;


    constructor(
        private ingredientService: IngredientService,
        private recetteService: RecetteService
    ) {
        this.recetteDTO = new RecetteDTO()
    }

    // Appel de la méthode fetchIngredients de façon optimisée (évite l'appel dans le constructeur)
    ngOnInit(): void {
        this.fetchIngredients();
    }

    addLine(): void {
        // console.log(this.ingredientIdSelect);

        if(this.ingredientIdSelect != null) {
            let nouvelleLigne = new LigneIngredient();
            nouvelleLigne.ingredient = this.ingredients.find((ingredient) =>
                ingredient.id == this.ingredientIdSelect)!;
            nouvelleLigne.ingredient= this.ingredientIdSelect ?? null; // A vérifier avec Timo !!!
            this.recetteDTO.ligneIngredients.push(nouvelleLigne);
            console.log(this.recetteDTO.ligneIngredients);
            // A FINIR
        }
    }

    /**
     * Récupère la liste des ingrédients depuis l'API
     */
    fetchIngredients(): void {
        this.ingredientService.getAllIngredients().subscribe({
            next: (data) => {
                this.ingredients = data;
                this.isLoading = false;                    
            },

            error: (error) => {
                this.errorMessage = "Erreur lors du chargement des ingrédients.";
                console.error("Erreur API:", error);
                this.isLoading = false;
            }

        });
    }

    /**
     * Soumet une nouvelle recette au service recette.
     */
    submitRecipe() {
        this.recetteService.addRecetteDTO(this.recetteDTO).subscribe(
            {
                next:(data) => {
                    //console.log(data);
                }
            }
        )
    }

    /**
     * 
     */
    majPourcentages() {

    }

}
