const Accordion = () => {
  return (
    <div className='join join-vertical bg-base-100 max-w-[800px] mx-auto'>
      <div className='collapse collapse-arrow join-item border-base-300 border'>
        <input type='radio' name='my-accordion-4' defaultChecked />
        <div className='collapse-title font-semibold'>Diablada (Región del Altiplano)</div>
        <div className='collapse-content text-sm'>Originaria del Carnaval de Oruro, una obra maestra del patrimonio oral e intangible de la humanidad. La Diablada es una espectacular representación de la lucha entre el bien y el mal. Liderada por el Arcángel San Miguel, un ejército de diablos danzantes con máscaras aterradoras y trajes lujosamente bordados se enfrenta a las fuerzas celestiales. La música, interpretada por potentes bandas de bronces, es un elemento central que marca el ritmo enérgico y marcial de la danza.</div>
      </div>
      <div className='collapse collapse-arrow join-item border-base-300 border'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title font-semibold'>Pujllay (Región de los Valles)</div>
        <div className='collapse-content text-sm'>Proveniente de Tarabuco, Chuquisaca, el Pujllay (que en quechua significa "juego" o "danza") conmemora la victoria de los guerreros Yampara sobre los españoles en la batalla de Jumbate en 1816. Los danzantes visten ponchos coloridos, monteras (cascos que imitan los de los conquistadores) y unas ojotas con grandes plataformas de madera que usan para zapatear con fuerza, marcando un ritmo que simboliza tanto la batalla como la conexión con la Pachamama durante la época de la cosecha.</div>
      </div>
      <div className='collapse collapse-arrow join-item border-base-300 border'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title font-semibold'>Chacarera (Región del Chaco)</div>
        <div className='collapse-content text-sm'>Aunque comparte nombre con una danza argentina, la Chacarera del Chaco boliviano (Tarija, Chuquisaca y Santa Cruz) tiene su propia identidad. Es una danza de pareja, ágil y alegre, que refleja el espíritu del hombre y la mujer del campo chaqueño. Se caracteriza por un zapateo vigoroso del hombre, que busca cortejar a la mujer, mientras ella responde con movimientos elegantes y el suave movimiento de su falda. La música, usualmente de guitarra y violín, es rápida y festiva.</div>
      </div>
      <div className='collapse collapse-arrow join-item border-base-300 border'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title font-semibold'>Macheteros (Región de la Amazonía / Llanos)</div>
        <div className='collapse-content text-sm'>Esta es una danza guerrera y ceremonial originaria del Beni, en la amazonía boliviana. Los Macheteros representan a los espíritus de la selva y rinden homenaje a la naturaleza. Los danzantes llevan un impresionante tocado de plumas de parabas (guacamayos) que cae por sus espaldas y sostienen un machete de madera en la mano. Sus movimientos son solemnes y rítmicos, imitando el caminar de los animales de la selva y mostrando una profunda conexión espiritual con su entorno.</div>
      </div>
      <div className='collapse collapse-arrow join-item border-base-300 border'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title font-semibold'>Saya Afroboliviana (Región de los Yungas)</div>
        <div className='collapse-content text-sm'>La Saya es la máxima expresión cultural de la comunidad afroboliviana, asentada principalmente en la región de los Yungas de La Paz. Nació como una forma de expresión y resistencia de los esclavos africanos. La danza combina la percusión de tambores con coplas cantadas que narran su historia, sus sufrimientos y sus alegrías. Liderada por un "caporal" (capataz), los hombres tocan los tambores mientras las mujeres, con sus polleras blancas, realizan movimientos de cadera sensuales y elegantes, simbolizando la herencia africana en Bolivia.</div>
      </div>
    </div>
  )
}

export default Accordion
