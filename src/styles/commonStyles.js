import colors from './colors';

export const evoInputDefault = {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(52, 52, 52, 0.5)'
}

export const evoInputDefaultHlf = {
    width: '45%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
}

export const evoContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
}

export const evoBlankContainer = {
    ...evoContainer,
    // backgroundColor: '52b788',
    backgroundColor: colors.whiteBack,
    padding: 25
}

export const evoRegisterContainer = {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.whiteBack,
    padding: 25
}
export const evoScrollContainer = {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff'
}

export const evoCommonHeading = {
    // fontFamily: 'Lobster-Regular',
    fontFamily: 'OpenSans-Light',
    fontSize: 26,
    color: colors.primary,
    marginBottom: 10,
    fontWeight: 'bold'
}

export const evoDefaultBtn = {
    width: '100%',
    padding: 5,
    marginTop: 15
}