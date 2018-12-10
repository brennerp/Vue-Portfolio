import moment from 'moment'

(function() {
  moment.defineLocale('pt-BR', {
    relativeTime: {
      future: 'em %s',
      past: '%s atrás',
      s: '%d seg',
      ss: '%d seg',
      m: 'um min',
      mm: '%d min',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthsShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ],
    longDateFormat: {
      LT: 'HH:mm',
      LLL: 'D/MM/YYYY - LT',
      lll: 'Do [de] MMM [de] YYYY LT'
    },
    ordinal: (number, _) => { // eslint-disable-line no-unused-vars
      return number
    }
  })
})()
