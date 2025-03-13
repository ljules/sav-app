import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/Ingredient';
import { IngredientService } from '../../../services/ingredient.service';

@Component({
  selector: 'app-recipe-calculator-page',
  templateUrl: './recipe-calculator-page.component.html',
  styleUrl: './recipe-calculator-page.component.css'
})
export class RecipeCalculatorPageComponent implements OnInit {
    ingredients: Ingredient[] = []; // Liste des ingrédients mis à disposition par l'API
    isLoading:  boolean = true;     // Flag marquant la récupération des données
    errorMessage: string = "";      // Eventuel message d'erreur

    constructor(private ingredientService: IngredientService) {}

    // Appel de la méthode fetchIngredients de façon optimisée (évite l'appel dans le constructeur)
    ngOnInit(): void {
        this.fetchIngredients();
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
}
