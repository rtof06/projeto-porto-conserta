import style from "./Cadastro.module.css";
import Header from "../../components/Header/Header";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import Buttons from "../../components/Buttons/Buttons";
import { FormEvent, useState } from "react";

export default function Cadastro() {

  document.title = "Cadastro"

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [cnh, setCNH] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCEP] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [plate, setPlate] = useState("");

  return (
    <div className={style.container}>
      <Header page="" path="/" />
      <div className={style.signup}>
        <h1 className={style.title}>FAZER CADASTRO</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <section className={style.info}>
            <h2 className={style.subTitle}>INFORMAÇÕES PESSOAIS</h2>
            <div className={style.input}>               
                <PrimaryInput
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                required={true}
              />                         
            </div>
            <div className={style.lastName}>
              <PrimaryInput
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Sobrenome"
                onChange={(e) => setLastName(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.birthday}>
              <PrimaryInput
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Data de nascimento"
                onChange={(e) => setBirthday(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.email}>
              <PrimaryInput
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.cpf}>
              <PrimaryInput
                type="text"
                name="cpf"
                id="cpf"
                placeholder="CPF"
                onChange={(e) => setCPF(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.cnh}>
              <PrimaryInput
                type="text"
                name="cnh"
                id="cnh"
                placeholder="CNH"
                onChange={(e) => setCNH(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.phone}>
              <PrimaryInput
                type="tel"
                name="phone"
                id="phone"
                placeholder="Telefone"
                onChange={(e) => setPhone(e.target.value)}
                required={true}
              />
            </div>
          </section>
          <section className={style.info}>
            <h2 className={style.subTitle}>ENDEREÇO</h2>
            <div className={style.cep}>
              <PrimaryInput
                type="text"
                name="cep"
                id="cep"
                placeholder="CEP"
                onChange={(e) => setCEP(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.street}>
              <PrimaryInput
                type="text"
                name="street"
                id="street"
                placeholder="Rua e número"
                onChange={(e) => setStreet(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.city}>
              <PrimaryInput
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.state}>
              <PrimaryInput
                type="text"
                name="state"
                id="state"
                placeholder="Estado"
                onChange={(e) => setState(e.target.value)}
                required={true}
              />
            </div>
          </section>
          <section className={style.info}>
            <h2 className={style.subTitle}>DADOS DO VEÍCULO</h2>
            <div className={style.brand}>
              <PrimaryInput
                type="text"
                name="brand"
                id="brand"
                placeholder="Marca"
                onChange={(e) => setBrand(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.model}>
              <PrimaryInput
                type="text"
                name="model"
                id="model"
                placeholder="Modelo"
                onChange={(e) => setModel(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.year}>
              <PrimaryInput
                type="number"
                name="year"
                id="year"
                placeholder="Ano"
                onChange={(e) => setYear(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.plate}>
              <PrimaryInput
                type="text"
                name="plate"
                id="plate"
                placeholder="Placa"
                onChange={(e) => setPlate(e.target.value)}
                required={true}
              />
            </div>
          </section>
          <Buttons type="submit" id="btnSingup">
            CADASTRAR
          </Buttons>
        </form>
      </div>
    </div>
  );
}
