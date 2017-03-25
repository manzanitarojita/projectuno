import React, { Component } from 'react';

import SubMenu from '../../components/SubMenu';
import CompaniesService from '../../app/bi/services/companies';

import styles from './styles/document.css';

const html2canvas = window.html2canvas;
const jsPDF = window.jsPDF;

class Documents extends Component {
    state = {
        company: CompaniesService.get().find(c => c.Id === this.props.match.params.company)
    };
    
    handleDownload = () => {
        html2canvas(document.getElementById('document'), {
            logging: true,
            onrendered: (canvas) => {
                const img = canvas.toDataURL('image/png');
                const doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
                });
                doc.addImage(img, 'JPEG', 15, 15);
                doc.save('doc.pdf');
            }
        });
    };
    
    render() {
        const { company } = this.state;
        
        return (
            <div>
                <SubMenu>
                    <a onClick={ this.handleDownload }>
                        Download
                    </a>
                </SubMenu>
                <div
                    id='document'
                    className={styles.wrap}>
                    <div
                        className={styles.table}>
                        <div
                            className={styles.row}>
                            <div
                                className={`${styles.cell} ${styles['cell_l2-3']} ${styles.fw}`}>
                                ПРОГРАММА ПРИНЯТИЯ НА ОБСЛУЖИВАНИЕ НОВЫХ КЛИЕНТОВ ПО АУДИТУ
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_r1-3']} ${styles['cell_c']} ${styles.fw}`}>
                                Код документа
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.table} ${styles.mt}`}>
                        <div
                            className={styles.row}>
                            <div
                                className={`${styles.cell} ${styles['cell_l2-3']} ${styles.fw}`}>
                                КЛИЕНТ: { company.Name }
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_r1-3']} ${styles.fw}`}>
                                ПЕРИОД:
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.table}  ${styles.mt} ${styles.tsf}`}>
                        <div
                            className={`${styles.row} ${styles['row_b']}`}>
                            <div
                                className={`${styles.cell} ${styles['cell_l2-3']} ${styles.fw}`}>
                                Цели и аудиторские процедуры
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_r1-3']} ${styles.fw}`}>
                                Ссылка на РД/комментарий
                            </div>
                        </div>
                        <div
                            className={`${styles.row} ${styles['row_b']} ${styles.cell} ${styles.fw}`}>
                            Цель - убедиться, что мы в состоянии выполнить этические требования,
                            клиент достаточно честен и проведение аудита для данного клиента
                            не повлечет для нас недопустимых рисков
                        </div>
                        <div
                            className={`${styles.row} ${styles['row_b']}`}>
                            <div
                                className={`${styles.cell} ${styles['cell_l2-3']}`}>
                                <ol
                                    className={`${styles.list}`}>
                                    <li>
                                        Проанализировать:
                                        <ul>
                                            <li>
                                                результаты переговоров с компанией, порекомендовавшей клиента;
                                            </li>
                                            <li>
                                                информацию, полученную внутри компании от других наших департаментов, если они сотрудничали с клиентом;
                                            </li>
                                            <li>
                                                информацию, доступную из внешних источников (публикации в СМИ, Интернет и т.п.);
                                            </li>
                                            <li>
                                                взаимоотношения клиента с какими-либо регулирующими органами;
                                            </li>
                                            <li>
                                                соблюдение клиентом нормативно-правовых требований
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Сделать вывод о том, можем ли мы положиться на честность руководства клиента и лиц,
                                        отвечающих за корпоративное управление, подтвердить законность деятельности клиента,
                                        безупречную деловую репутацию (анализ связанных сторон и контрагентов).
                                    </li>
                                    <li>
                                        Получить и проверить копии учредительных документов, свидетельства о регистрации юридического
                                        лица, копию последней бухгалтерской отчетности разрешительную документацию (лицензии,
                                        свидетельства о членстве в СРО и пр.).
                                    </li>
                                    <li>
                                        Сделать вывод, что оказание услуги не повлечет за собой нарушение нами этических принципов и не
                                        спровоцирует конфликт интересов.
                                    </li>
                                    <li>
                                        Организовать взаимодействие с предыдущим аудитором и выяснить причины профессионального
                                        характера, которые могут помешать нашему назначению.
                                    </li>
                                    <li>
                                        Получить копию протокола, в котором зафиксировано назначение нашей фирмы официальным
                                        аудитором клиента.
                                    </li>
                                    <li>
                                        Получить понимание, для каких целей будет использоваться аудиторское заключение.
                                    </li>
                                    <li>
                                        Сделать вывод о возможности нашего сотрудничества с данным клиентом с точки зрения сохранения
                                        нашей деловой и профессиональной репутации.
                                    </li>
                                </ol>
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_r1-3']}`}></div>
                        </div>
                        <div
                            className={`${styles.row} ${styles['row_b']} ${styles.cell}`}>
                            Проанализировав указанные цели и результаты процедур, описанных выше, я подтверждаю,
                            что мы можем оказать аудиторские услуги клиенту надлежащего качества в соответствии
                            с условиями данного задания.
                        </div>
                        <div
                            className={`${styles.row} ${styles['row_b']}`}>
                            <div
                                className={`${styles.cell} ${styles['cell_1-2']} ${styles['cell_br']} ${styles.fw}`}>
                                Подготовил (Ф.И.О.):
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_1-2']} ${styles.fw}`}>
                                Проверил (Ф.И.О.):
                            </div>
                        </div>
                        <div
                            className={styles.row}>
                            <div
                                className={`${styles.cell} ${styles['cell_1-4']} ${styles['cell_br']} ${styles.fw}`}>
                                Подпись
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_1-4']} ${styles['cell_br']}`}></div>
                            <div
                                className={`${styles.cell} ${styles['cell_1-4']} ${styles['cell_br']} ${styles.fw}`}>
                                Подпись
                            </div>
                            <div
                                className={`${styles.cell} ${styles['cell_1-4']}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Documents;
