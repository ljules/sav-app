import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientPickerComponent } from '../../../shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { Ingredient } from '../../../models/Ingredient';
import { IngredientService } from '../../../services/ingredient.service';
import { LigneIngredient } from '../../../models/LigneIngredient';
import { RecetteDTO } from '../../../models/RecetteDTO';
import { RecetteService } from '../../../services/recette.service';

@Component({
  selector: 'app-recipe-calculator-page',
  templateUrl: './recipe-calculator-page.component.html',
  styleUrl: './recipe-calculator-page.component.css'
})
export class RecipeCalculatorPageComponent implements OnInit {
    availableIngredients: Ingredient[] = [];        // à alimenter via service
    selectedIngredients: LigneIngredient[] = [];    // Liste des ingrédients sélectionnés

    constructor(
        private ingredientService: IngredientService,
        private modalService: NgbModal
    ) {}

    /**
     * Appel du service de récupération des ingrédients à l'initialisation
     */
    ngOnInit(): void {
        this.loadIngredients();
    }

    loadIngredients(): void {
        this.ingredientService.getAllIngredients().subscribe({
          next: (ingredients) => {
            this.availableIngredients = ingredients;
          },
          error: (err) => {
            console.error('Erreur lors du chargement des ingrédients', err);
          }
        });
    }

    /**
     * Modal de sélection des ingrédients.
     */
    openIngredientModal(): void {
        const modalRef = this.modalService.open(ModalIngredientPickerComponent);
        modalRef.componentInstance.ingredients = this.availableIngredients;

    modalRef.result.then((selectedIngredient: Ingredient) => {
        if (selectedIngredient) {
        this.ajouterIngredient(selectedIngredient);
        }
    }).catch(() => {});
    }   


    /**
     * Méthode d'ajout d'un ingrédient à la recette
     * @param ingredient Ingrédient à ajouter à la recette
     */
    ajouterIngredient(ingredient: Ingredient): void {
    // Empêcher les doublons
    if (this.selectedIngredients.find(l => l.ingredient?.id === ingredient.id)) {
        return;
    }

    this.selectedIngredients.push({
        id: 0,          // valeur temporaire pour l'instant
        recette: null,  // sera renseigné côté backend à la soumission
        ingredient: ingredient,
        quantite: 0,
        pourcentage: 0
      });        

    }

    /**
     * Supprime un ingrédient préalablement choisi pour la recette en cours
     * @param index 
     */
    supprimerIngredient(index: number): void {
        this.selectedIngredients.splice(index, 1);
      }

}
