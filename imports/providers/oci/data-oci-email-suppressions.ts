// https://www.terraform.io/docs/providers/oci/r/data_oci_email_suppressions.html
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
      "email_address": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "suppressions": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "email_address": "string",
              "id": "string",
              "reason": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "time_created_greater_than_or_equal_to": {
        "type": "string",
        "optional": true
      },
      "time_created_less_than": {
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

export interface DataOciEmailSuppressionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly emailAddress?: string;
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  /** filter block */
  readonly filter?: DataOciEmailSuppressionsFilter[];
}
export class DataOciEmailSuppressionsSuppressions extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // reason - computed: true, optional: false, required: true
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciEmailSuppressionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciEmailSuppressions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciEmailSuppressionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_email_suppressions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._emailAddress = config.emailAddress;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
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

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string;
  public get emailAddress() {
    return this._emailAddress;
  }
  public set emailAddress(value: string | undefined) {
    this._emailAddress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // suppressions - computed: true, optional: false, required: true
  public suppressions(index: string) {
    return new DataOciEmailSuppressionsSuppressions(this, 'suppressions', index);
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciEmailSuppressionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciEmailSuppressionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      email_address: this._emailAddress,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      filter: this._filter,
    };
  }
}
