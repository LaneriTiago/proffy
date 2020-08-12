import React from 'react';
import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
import Input from '../../components/Input';
import Select from '../../components/select';


function TeacherList () {
    return (
            <div id="page-teacher-list" className="container">
                <PageHeader title="Estes são os proffys disponíveis.">
                    <form id="search-teachers">
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
                        <Input type="text" name="time" label="horário"/>
                    </form>
                </PageHeader>
                
                <main>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                </main>

            </div>
    )
}

export default TeacherList;