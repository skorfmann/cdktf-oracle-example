// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_certificates.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificates": {
        "type": [
          "list",
          [
            "object",
            {
              "certificate_data": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "extensions": [
                "list",
                [
                  "object",
                  {
                    "is_critical": "bool",
                    "name": "string",
                    "value": "string"
                  }
                ]
              ],
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_trust_verification_disabled": "bool",
              "issued_by": "string",
              "issuer_name": [
                "list",
                [
                  "object",
                  {
                    "common_name": "string",
                    "country": "string",
                    "email_address": "string",
                    "locality": "string",
                    "organization": "string",
                    "organizational_unit": "string",
                    "state_province": "string"
                  }
                ]
              ],
              "private_key_data": "string",
              "public_key_info": [
                "list",
                [
                  "object",
                  {
                    "algorithm": "string",
                    "exponent": "number",
                    "key_size": "number"
                  }
                ]
              ],
              "serial_number": "string",
              "signature_algorithm": "string",
              "state": "string",
              "subject_name": [
                "list",
                [
                  "object",
                  {
                    "common_name": "string",
                    "country": "string",
                    "email_address": "string",
                    "locality": "string",
                    "organization": "string",
                    "organizational_unit": "string",
                    "state_province": "string"
                  }
                ]
              ],
              "time_created": "string",
              "time_not_valid_after": "string",
              "time_not_valid_before": "string",
              "version": "number"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_names": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ids": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "states": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
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

export interface DataOciWaasCertificatesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayNames?: string[];
  readonly ids?: string[];
  readonly states?: string[];
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  /** filter block */
  readonly filter?: DataOciWaasCertificatesFilter[];
}
export class DataOciWaasCertificatesCertificatesExtensions extends ComplexComputedList {

  // is_critical - computed: true, optional: false, required: true
  public get isCritical() {
    return this.getBooleanAttribute('is_critical');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasCertificatesCertificatesIssuerName extends ComplexComputedList {

  // common_name - computed: true, optional: false, required: true
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: true
  public get country() {
    return this.getStringAttribute('country');
  }

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // locality - computed: true, optional: false, required: true
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: true
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: true
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // state_province - computed: true, optional: false, required: true
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
}
export class DataOciWaasCertificatesCertificatesPublicKeyInfo extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // exponent - computed: true, optional: false, required: true
  public get exponent() {
    return this.getNumberAttribute('exponent');
  }

  // key_size - computed: true, optional: false, required: true
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
}
export class DataOciWaasCertificatesCertificatesSubjectName extends ComplexComputedList {

  // common_name - computed: true, optional: false, required: true
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: true
  public get country() {
    return this.getStringAttribute('country');
  }

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // locality - computed: true, optional: false, required: true
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: true
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: true
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // state_province - computed: true, optional: false, required: true
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
}
export class DataOciWaasCertificatesCertificates extends ComplexComputedList {

  // certificate_data - computed: true, optional: false, required: true
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extensions - computed: true, optional: false, required: true
  public get extensions() {
    return 'not implemented' as any;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_trust_verification_disabled - computed: true, optional: false, required: true
  public get isTrustVerificationDisabled() {
    return this.getBooleanAttribute('is_trust_verification_disabled');
  }

  // issued_by - computed: true, optional: false, required: true
  public get issuedBy() {
    return this.getStringAttribute('issued_by');
  }

  // issuer_name - computed: true, optional: false, required: true
  public get issuerName() {
    return 'not implemented' as any;
  }

  // private_key_data - computed: true, optional: false, required: true
  public get privateKeyData() {
    return this.getStringAttribute('private_key_data');
  }

  // public_key_info - computed: true, optional: false, required: true
  public get publicKeyInfo() {
    return 'not implemented' as any;
  }

  // serial_number - computed: true, optional: false, required: true
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: false, required: true
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject_name - computed: true, optional: false, required: true
  public get subjectName() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_not_valid_after - computed: true, optional: false, required: true
  public get timeNotValidAfter() {
    return this.getStringAttribute('time_not_valid_after');
  }

  // time_not_valid_before - computed: true, optional: false, required: true
  public get timeNotValidBefore() {
    return this.getStringAttribute('time_not_valid_before');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataOciWaasCertificatesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciWaasCertificates extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasCertificatesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_certificates',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayNames = config.displayNames;
    this._ids = config.ids;
    this._states = config.states;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: true, optional: false, required: true
  public certificates(index: string) {
    return new DataOciWaasCertificatesCertificates(this, 'certificates', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_names - computed: false, optional: true, required: false
  private _displayNames?: string[];
  public get displayNames() {
    return this._displayNames;
  }
  public set displayNames(value: string[] | undefined) {
    this._displayNames = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[];
  public get ids() {
    return this._ids;
  }
  public set ids(value: string[] | undefined) {
    this._ids = value;
  }

  // states - computed: false, optional: true, required: false
  private _states?: string[];
  public get states() {
    return this._states;
  }
  public set states(value: string[] | undefined) {
    this._states = value;
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
  private _filter?: DataOciWaasCertificatesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciWaasCertificatesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_names: this._displayNames,
      ids: this._ids,
      states: this._states,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      filter: this._filter,
    };
  }
}
