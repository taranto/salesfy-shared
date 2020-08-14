import { Internationalization } from './test/Internationalization.spec';
import { UserValSpec } from './test/modules/user/user/UserVal.spec';
import { TestingTest } from './test/TestingTest.spec';
import AttributesSpec from './test/modules/Attributes.spec';
import UtilitySpec from './test/utils/Utility.spec';
import ValHungarianNotationSpec from './test/utils/ValHungarianNotation.spec';
import { QuickTest } from './test/QuickTest.spec';
import { CardLayoutTests } from './test/utils/LayoutCardTemplate.spec';
import { DateUtilTest } from './test/utils/DateUtil.spec';
import { JsonUtilTest } from './test/utils/JsonUtil.spec';
import { StringUtilTest } from './test/utils/StringUtil.spec';

require('source-map-support').install();

QuickTest.test();
TestingTest.test();
Internationalization.test();
AttributesSpec.test();
UtilitySpec.test();
UserValSpec.test();
ValHungarianNotationSpec.test();
CardLayoutTests.test();
DateUtilTest.test();
JsonUtilTest.test();
StringUtilTest.test();
