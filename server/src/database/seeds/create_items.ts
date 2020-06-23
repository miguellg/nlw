import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex(`items`).insert([
        { title: `Lâmpadas`, image: `lampadas.svg`},
        { title: `Pilhas e baterias`, image: `baterias.svg`},
        { title: `Papéis e Papelão`, image: `papeis-papelao.svg`},
        { title: `Residuos Eletrõnicos`, image: `eletronicos.svg`},
        { title: `Residuos Orgãnicos`, image: `organicos.svg`},
        { title: `Óleo de Cozinha`, image: `oleo.svg`},
    ])
}