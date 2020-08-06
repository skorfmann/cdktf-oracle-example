// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_protection_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "action": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "exclusions": {
        "type": [
          "list",
          [
            "object",
            {
              "exclusions": [
                "list",
                "string"
              ],
              "target": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key": {
        "type": "string",
        "computed": true
      },
      "labels": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "mod_security_rule_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "protection_rule_key": {
        "type": "string",
        "required": true
      },
      "waas_policy_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciWaasProtectionRuleConfig extends TerraformMetaArguments {
  readonly protectionRuleKey: string;
  readonly waasPolicyId: string;
}
export class DataOciWaasProtectionRuleExclusions extends ComplexComputedList {

  // exclusions - computed: true, optional: false, required: true
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }
}

// Resource

export class DataOciWaasProtectionRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasProtectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_protection_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._protectionRuleKey = config.protectionRuleKey;
    this._waasPolicyId = config.waasPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusions - computed: true, optional: false, required: true
  public exclusions(index: string) {
    return new DataOciWaasProtectionRuleExclusions(this, 'exclusions', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return this.getListAttribute('labels');
  }

  // mod_security_rule_ids - computed: true, optional: false, required: true
  public get modSecurityRuleIds() {
    return this.getListAttribute('mod_security_rule_ids');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_rule_key - computed: false, optional: false, required: true
  private _protectionRuleKey: string;
  public get protectionRuleKey() {
    return this._protectionRuleKey;
  }
  public set protectionRuleKey(value: string) {
    this._protectionRuleKey = value;
  }

  // waas_policy_id - computed: false, optional: false, required: true
  private _waasPolicyId: string;
  public get waasPolicyId() {
    return this._waasPolicyId;
  }
  public set waasPolicyId(value: string) {
    this._waasPolicyId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      protection_rule_key: this._protectionRuleKey,
      waas_policy_id: this._waasPolicyId,
    };
  }
}
