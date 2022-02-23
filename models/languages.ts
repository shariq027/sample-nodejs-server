import { BOOLEAN } from 'sequelize';
import { INTEGER, Model, STRING } from 'sequelize';
import sequelize from '../config/sequelize';

export class Language extends Model {

}

export class LanguageModel {
    constructor(){}
    LanguageId: number;
    LanguageName: string;
    LanguageCode: string;
    Active: boolean;
  }
  
  Language.init(
    {
        LanguageId: { field: 'language_id', type: INTEGER, primaryKey: true, autoIncrement: true },
        LanguageName: { field: 'language_name', type: STRING },
        LanguageCode: { field: 'language_code', type: STRING },
        Active: { field: 'active', type: BOOLEAN }
    },
    { sequelize, modelName: 'languages', timestamps: false }
  )