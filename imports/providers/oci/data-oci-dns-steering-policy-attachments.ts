// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_steering_policy_attachments.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "domain": {
        "type": "string",
        "optional": true
      },
      "domain_contains": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "steering_policy_attachments": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "display_name": "string",
              "domain_name": "string",
              "id": "string",
              "rtypes": [
                "list",
                "string"
              ],
              "self": "string",
              "state": "string",
              "steering_policy_id": "string",
              "time_created": "string",
              "zone_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "steering_policy_id": {
        "type": "string",
        "optional": true
      },
      "time_created_greater_than_or_equal_to": {
        "type": "string",
        "optional": true
      },
      "time_created_less_than": {
        "type": "string",
        "optional": true
      },
      "zone_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
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

export interface DataOciDnsSteeringPolicyAttachmentsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly domain?: string;
  readonly domainContains?: string;
  readonly state?: string;
  readonly steeringPolicyId?: string;
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  readonly zoneId?: string;
  /** filter block */
  readonly filter?: DataOciDnsSteeringPolicyAttachmentsFilter[];
}
export class DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // rtypes - computed: true, optional: false, required: true
  public get rtypes() {
    return this.getListAttribute('rtypes');
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // steering_policy_id - computed: true, optional: false, required: true
  public get steeringPolicyId() {
    return this.getStringAttribute('steering_policy_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}
export interface DataOciDnsSteeringPolicyAttachmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDnsSteeringPolicyAttachments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsSteeringPolicyAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policy_attachments',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._domainContains = config.domainContains;
    this._state = config.state;
    this._steeringPolicyId = config.steeringPolicyId;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._zoneId = config.zoneId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // domain_contains - computed: false, optional: true, required: false
  private _domainContains?: string;
  public get domainContains() {
    return this._domainContains;
  }
  public set domainContains(value: string | undefined) {
    this._domainContains = value;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // steering_policy_attachments - computed: true, optional: false, required: true
  public steeringPolicyAttachments(index: string) {
    return new DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments(this, 'steering_policy_attachments', index);
  }

  // steering_policy_id - computed: false, optional: true, required: false
  private _steeringPolicyId?: string;
  public get steeringPolicyId() {
    return this._steeringPolicyId;
  }
  public set steeringPolicyId(value: string | undefined) {
    this._steeringPolicyId = value;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string;
  public get timeCreatedGreaterThanOrEqualTo() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string | undefined) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string;
  public get timeCreatedLessThan() {
    return this._timeCreatedLessThan;
  }
  public set timeCreatedLessThan(value: string | undefined) {
    this._timeCreatedLessThan = value;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this._zoneId;
  }
  public set zoneId(value: string | undefined) {
    this._zoneId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDnsSteeringPolicyAttachmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDnsSteeringPolicyAttachmentsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      domain: this._domain,
      domain_contains: this._domainContains,
      state: this._state,
      steering_policy_id: this._steeringPolicyId,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      zone_id: this._zoneId,
      filter: this._filter,
    };
  }
}
