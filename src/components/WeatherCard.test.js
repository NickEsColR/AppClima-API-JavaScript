import React from "react";
import {
  act,
  fireEvent,
  render,
} from "@testing-library/react";
import { WeatherCard } from "./WeatherCard";
import userEvent from "@testing-library/user-event";

describe("WeatherCard", () => {
  const mockRemoveCard = jest.fn();
  const countries = ["Argentina", "Brasil", "Chile", "Colombia", "Uruguay"];
  const colombiaCities = [
    "Acacias",
    "Acevedo",
    "Aguachica",
    "Antioquia",
    "Arauca",
    "Armenia",
    "Atlantico",
    "Barrancabermeja",
    "Barranquilla",
    "Bello",
    "Bermudez",
    "Boyaca",
    "Bucaramanga",
    "Buenaventura",
    "Buga",
    "Cajica",
    "Calamar",
    "Caldas",
    "Candelaria",
    "Cartagena",
    "Cartago",
    "Cauca",
    "Chia",
    "Chiquinquira",
    "Chocho",
    "Columbia",
    "Corozal",
    "Cota",
    "Cumaribo",
    "Cundinamarca",
    "Dosquebradas",
    "Duitama",
    "El Colegio",
    "Engativa",
    "Envigado",
    "Espinal",
    "Florencia",
    "Floridablanca",
    "Fonseca",
    "Fundacion",
    "Fusagasuga",
    "Galapa",
    "Ginebra",
    "Giron",
    "Guarne",
    "Ibague",
    "Inirida",
    "Ipiales",
    "Itagui",
    "La Ceja",
    "La Estrella",
    "La Mesa",
    "La Union",
    "Los Patios",
    "Madrid",
    "Magdalena",
    "Manizales",
    "Miami",
    "Mitu",
    "Montenegro",
    "Mosquera",
    "Municipio de Copacabana",
    "Neiva",
    "Obando",
    "Palmira",
    "Pamplona",
    "Pasto",
    "Pereira",
    "Piedecuesta",
    "Pitalito",
    "Planadas",
    "Popayan",
    "Puerta Roja",
    "Puerto Tejada",
    "Purificacion",
    "Riohacha",
    "Rionegro",
    "Risaralda",
    "Sabana de Torres",
    "Sabaneta",
    "Sachica",
    "San Clemente",
    "San Diego",
    "San Gil",
    "San Martin",
    "Santa Marta",
    "Santa Rosa de Cabal",
    "Santa Rosa del Sur",
    "Santiago de Cali",
    "Silvania",
    "Sincelejo",
    "Soacha",
    "Sogamoso",
    "Soledad",
    "Sopo",
    "Tarapaca",
    "Tauramena",
    "Tenjo",
    "Tocancipa",
    "Tunja",
    "Turbaco",
    "Ubaque",
    "Urumita",
    "Valledupar",
    "Velez",
    "Villa del Rosario",
    "Villamaria",
    "Villavicencio",
    "Yopal",
    "Yotoco",
    "Yumbo",
  ];
  let component;
  let user;

  const msgNoCountrySelected = "Agrege pais y cuidad";
  const msgSelectCountry = "Selecciona el pais";
  const msgSelectCityNoCountry = "Selecciona el pais primero";
  const msgSelectCity = "Selecciona la ciudad";
  const msgCountryOrCityEmpty = "Ambos campos son obligatorios";
  const msgCityNotFound = "Ciudad no encontrada";
  const msgSearch = "Buscar";

  beforeEach(() => {
    component = render(
      <WeatherCard
        index={0}
        removeCard={mockRemoveCard}
        countries={countries}
      />
    );
  });

  test("renders initial information", () => {
    component.getByText(msgNoCountrySelected);
    component.getByRole("option", { name: msgSelectCountry }).selected;
    component.getByRole("option", { name: msgSelectCityNoCountry }).selected;
    component.getByText(msgSearch);
  });

  test("change country", () => {
    const select = component.getAllByRole("combobox")[0];
    act(() => {
      userEvent.selectOptions(
        select,
        component.getByRole("option", { name: countries[3] })
      );
    });
    component.getByRole("option", { name: countries[3] }).selected;
    component.getByRole("option", { name: msgSelectCity }).selected;
  });

  test("correct cities from country", () => {
    const select = component.getAllByRole("combobox")[0];
    act(() => {
      userEvent.selectOptions(
        select,
        component.getByRole("option", { name: countries[3] })
      );
    });
    const selectCity = component.getAllByRole("combobox")[1];
    const actualcities = Array.from(selectCity.options)
      .map((option) => option.textContent)
      .slice(1);
    expect(actualcities).toEqual(colombiaCities);
  });

  test("change city", () => {
    const select = component.getAllByRole("combobox")[0];
    act(() => {
      userEvent.selectOptions(
        select,
        component.getByRole("option", { name: countries[3] })
      );
      const selectCity = component.getAllByRole("combobox")[1];
      userEvent.selectOptions(
        selectCity,
        component.getByRole("option", { name: colombiaCities[0] })
      );
    });
    component.getByRole("option", { name: colombiaCities[0] }).selected;
  });

  test("submit correct city", () => {
    const select = component.getAllByRole("combobox")[0];
    act(() => {
      userEvent.selectOptions(
        select,
        component.getByRole("option", { name: countries[3] })
      );
      const selectCity = component.getAllByRole("combobox")[1];
      userEvent.selectOptions(
        selectCity,
        component.getByRole("option", { name: colombiaCities[0] })
      );
      const btn = component.getByText(msgSearch);
      userEvent.click(btn);
    });
    expect(component.queryByText(msgCountryOrCityEmpty)).toBeNull();
  });

  test("submit without country", ()=> {
    const btn = component.getByText(msgSearch);
    act(() => {
      userEvent.click(btn);
    });
    component.findByText(msgCountryOrCityEmpty);
  })

  test("submit without city", ()=> {
    const select = component.getAllByRole("combobox")[0];
    act(() => {
      userEvent.selectOptions(
        select,
        component.getByRole("option", { name: countries[3] })
      );
      const btn = component.getByText(msgSearch);
      userEvent.click(btn);
    });
    component.findByText(msgCountryOrCityEmpty);
  })

  test("delete card", () => {
    const btn = component.getByText("x");
    fireEvent.click(btn);
    expect(mockRemoveCard).toHaveBeenCalled();
  })
});
