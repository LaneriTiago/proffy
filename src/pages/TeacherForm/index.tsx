import React from 'react';
import './styles.css';
import PageHeader from '../../components/pageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/Textarea';
import Select from '../../components/select';

function TeacherForm () {
    return (
            <div id="page-teacher-form" className="container">
                <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição."
                />
                <main>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="nome completo do usuário" />
                        <Input name="avatar" label="Avatar" />
                        <Input name="whatsapp" label="Whatsapp" />
                        <TextArea name="bio" label="biografia" />

                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="matéria"
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Matematica', label: 'Matematica'},
                                {value: 'Fisica', label: 'Fisica'},
                                {value: 'Portugues', label: 'Portugues'},
                                {value: 'Quimica', label: 'Quimica'},
                                {value: 'Educacao fisica', label: 'Educacao fisica'},
                                
                            ]}
                            />
                         <Input name="cost" label="custo da sua hora por aula" />
                    </fieldset>
                    <fieldset>
                        <legend>Horários disponíveis
                            <button type="button">
                              + Novo horário
                            </button>
                        </legend>
                        <div className="schedule-item">
                          <Select 
                            name="week-day" 
                            label="Dia da semana"
                            options={[
                                {value: '0', label: 'domingo'},
                                {value: '1', label: 'segunda-feira'},
                                {value: '2', label: 'terça-feira'},
                                {value: '3', label: 'quarta-feira'},
                                {value: '4', label: 'quinta-feira'},
                                {value: '5', label: 'sexta-feira'},
                                {value: '6 fisica', label: 'Sábado'},
                                
                            ]}
                         /> 
                         <Input name="from" label="Das" type="time"/>
                         <Input name="to" label="Até" type="time"/>
                        </div>
                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>
                        <button type="button">Salvar o cadastro</button>
                    </footer>
                </main>
            </div>
        
    )
}

export default TeacherForm;