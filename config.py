class BaseConfig(object):
    '''
    Base config class
    '''
    DEBUG = True
    TESTING = False

class Config(BaseConfig):
    """
    Production specific config
    """
    DEBUG = False

class DevConfig(BaseConfig):
    """
    Development environment specific configuration
    """
    DEBUG = True
    TESTING = True
