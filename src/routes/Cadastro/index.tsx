import style from "./Cadastro.module.css";
import Header from "../../components/Header/Header";
import PrimaryInput from "../../components/Inputs/PrimaryInputs";
import Buttons from "../../components/Buttons/Buttons";
import { FormEvent, useState } from "react";
import { users } from "../../auth/users";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  document.title = "Cadastro";

  const navigate = useNavigate();

  const checkPassword = (pw:string, secPw:string) => {
    if (pw !== secPw) {
      alert("As senhas não coincidem. Por favor cheque novamente!");
    }
  }

  const addNewUser = (email:string, pw:string) => {
    const emailExists = users.some((user) => user.email === email)
    
    if (emailExists) {
      alert("Esse email já está cadastrado. Por favor, utilize outro email ou faça seu login na página de login.");
    } else {
      users.push({email: email, password: pw});
      alert("Cadastro realizado!");
      navigate("/login");
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    checkPassword(password, secPassword);
    addNewUser(email, password)
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");

  return (
    <div className={style.container}>
      <Header page="LOGIN" path="/login" path2="/" />
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
                required={true}
              />
            </div>
            <div className={style.lastName}>
              <PrimaryInput
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Sobrenome"
                required={true}
              />
            </div>
            <div className={style.birthday}>
              <PrimaryInput
                 type="date" 
                 id="birthday" 
                 name="birthday"
                 placeholder="Data de nascimento"
                 inputmode="numeric" 
                 pattern="\d{2}/\d{2}/\d{4}" 
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
                required={true}
              />
            </div>
            <div className={style.cnh}>
              <PrimaryInput
                type="text"
                name="cnh"
                id="cnh"
                placeholder="CNH"
                required={true}
              />
            </div>
            <div className={style.phone}>
              <PrimaryInput
                type="tel"
                name="phone"
                id="phone"
                placeholder="Telefone"
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
                required={true}
              />
            </div>
            <div className={style.street}>
              <PrimaryInput
                type="text"
                name="street"
                id="street"
                placeholder="Rua e número"
                required={true}
              />
            </div>
            <div className={style.city}>
              <PrimaryInput
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
                required={true}
              />
            </div>
            <div className={style.state}>
              <PrimaryInput
                type="text"
                name="state"
                id="state"
                placeholder="Estado"
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
                required={true}
              />
            </div>
            <div className={style.model}>
              <PrimaryInput
                type="text"
                name="model"
                id="model"
                placeholder="Modelo"
                required={true}
              />
            </div>
            <div className={style.year}>
              <PrimaryInput
                type="number"
                name="year"
                id="year"
                min={1900}
                max={2025}
                placeholder="Ano"
                required={true}
              />
            </div>
            <div className={style.plate}>
              <PrimaryInput
                type="text"
                name="plate"
                id="plate"
                placeholder="Placa"
                required={true}
              />
            </div>
          </section>
          <section className={style.info}>
            <h2 className={style.subTitle}>
              Crie uma senha (mín. de 3 caracteres e máximo de 8):
            </h2>
            <div className={style.passwordInput}>
              <PrimaryInput
                type="password"
                name="password"
                id="password"
                minLength={3}
                maxLength={8}
                placeholder="Digite sua senha"
                title="Digite sua senha (mín. de 3 caracteres e máximo de 8)"
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>
            <div className={style.passwordInput}>
              <PrimaryInput
                type="password"
                name="password"
                id="CheckPassword"
                placeholder="Confirme sua senha"
                title="Confirme sua senha (mín. de 3 caracteres e máximo de 8)"
                onChange={(e) => setSecPassword(e.target.value)}
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
