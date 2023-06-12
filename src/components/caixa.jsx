function Caixa(props){
    return (
    <div class="caixa">
        <p>Codigo: {props.codigo}</p>
        <p>Nome: {props.nome}</p>
        <p>Telefone: {props.telefone}</p>
        <p>Endereço: {props.endereco}</p>
        <p>Cargo: {props.cargo}</p>
    </div>)
}
export default Caixa;