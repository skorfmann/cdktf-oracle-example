// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_waas_policies.html
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
      },
      "waas_policies": {
        "type": [
          "list",
          [
            "object",
            {
              "additional_domains": [
                "list",
                "string"
              ],
              "cname": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "domain": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "origin_groups": [
                "list",
                [
                  "object",
                  {
                    "label": "string",
                    "origin_group": [
                      "list",
                      [
                        "object",
                        {
                          "origin": "string",
                          "weight": "number"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "origins": [
                "list",
                [
                  "object",
                  {
                    "custom_headers": [
                      "list",
                      [
                        "object",
                        {
                          "name": "string",
                          "value": "string"
                        }
                      ]
                    ],
                    "http_port": "number",
                    "https_port": "number",
                    "label": "string",
                    "uri": "string"
                  }
                ]
              ],
              "policy_config": [
                "list",
                [
                  "object",
                  {
                    "certificate_id": "string",
                    "cipher_group": "string",
                    "client_address_header": "string",
                    "health_checks": [
                      "list",
                      [
                        "object",
                        {
                          "expected_response_code_group": [
                            "list",
                            "string"
                          ],
                          "expected_response_text": "string",
                          "headers": [
                            "map",
                            "string"
                          ],
                          "healthy_threshold": "number",
                          "interval_in_seconds": "number",
                          "is_enabled": "bool",
                          "is_response_text_check_enabled": "bool",
                          "method": "string",
                          "path": "string",
                          "timeout_in_seconds": "number",
                          "unhealthy_threshold": "number"
                        }
                      ]
                    ],
                    "is_behind_cdn": "bool",
                    "is_cache_control_respected": "bool",
                    "is_https_enabled": "bool",
                    "is_https_forced": "bool",
                    "is_origin_compression_enabled": "bool",
                    "is_response_buffering_enabled": "bool",
                    "is_sni_enabled": "bool",
                    "load_balancing_method": [
                      "list",
                      [
                        "object",
                        {
                          "domain": "string",
                          "expiration_time_in_seconds": "number",
                          "method": "string",
                          "name": "string"
                        }
                      ]
                    ],
                    "tls_protocols": [
                      "list",
                      "string"
                    ],
                    "websocket_path_prefixes": [
                      "list",
                      "string"
                    ]
                  }
                ]
              ],
              "state": "string",
              "time_created": "string",
              "waf_config": [
                "list",
                [
                  "object",
                  {
                    "access_rules": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "block_action": "string",
                          "block_error_page_code": "string",
                          "block_error_page_description": "string",
                          "block_error_page_message": "string",
                          "block_response_code": "number",
                          "bypass_challenges": [
                            "list",
                            "string"
                          ],
                          "captcha_footer": "string",
                          "captcha_header": "string",
                          "captcha_submit_label": "string",
                          "captcha_title": "string",
                          "criteria": [
                            "list",
                            [
                              "object",
                              {
                                "condition": "string",
                                "is_case_sensitive": "bool",
                                "value": "string"
                              }
                            ]
                          ],
                          "name": "string",
                          "redirect_response_code": "string",
                          "redirect_url": "string",
                          "response_header_manipulation": [
                            "list",
                            [
                              "object",
                              {
                                "action": "string",
                                "header": "string",
                                "value": "string"
                              }
                            ]
                          ]
                        }
                      ]
                    ],
                    "address_rate_limiting": [
                      "list",
                      [
                        "object",
                        {
                          "allowed_rate_per_address": "number",
                          "block_response_code": "number",
                          "is_enabled": "bool",
                          "max_delayed_count_per_address": "number"
                        }
                      ]
                    ],
                    "caching_rules": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "caching_duration": "string",
                          "client_caching_duration": "string",
                          "criteria": [
                            "list",
                            [
                              "object",
                              {
                                "condition": "string",
                                "value": "string"
                              }
                            ]
                          ],
                          "is_client_caching_enabled": "bool",
                          "key": "string",
                          "name": "string"
                        }
                      ]
                    ],
                    "captchas": [
                      "list",
                      [
                        "object",
                        {
                          "failure_message": "string",
                          "footer_text": "string",
                          "header_text": "string",
                          "session_expiration_in_seconds": "number",
                          "submit_label": "string",
                          "title": "string",
                          "url": "string"
                        }
                      ]
                    ],
                    "custom_protection_rules": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "exclusions": [
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
                          "id": "string"
                        }
                      ]
                    ],
                    "device_fingerprint_challenge": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "action_expiration_in_seconds": "number",
                          "challenge_settings": [
                            "list",
                            [
                              "object",
                              {
                                "block_action": "string",
                                "block_error_page_code": "string",
                                "block_error_page_description": "string",
                                "block_error_page_message": "string",
                                "block_response_code": "number",
                                "captcha_footer": "string",
                                "captcha_header": "string",
                                "captcha_submit_label": "string",
                                "captcha_title": "string"
                              }
                            ]
                          ],
                          "failure_threshold": "number",
                          "failure_threshold_expiration_in_seconds": "number",
                          "is_enabled": "bool",
                          "max_address_count": "number",
                          "max_address_count_expiration_in_seconds": "number"
                        }
                      ]
                    ],
                    "human_interaction_challenge": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "action_expiration_in_seconds": "number",
                          "challenge_settings": [
                            "list",
                            [
                              "object",
                              {
                                "block_action": "string",
                                "block_error_page_code": "string",
                                "block_error_page_description": "string",
                                "block_error_page_message": "string",
                                "block_response_code": "number",
                                "captcha_footer": "string",
                                "captcha_header": "string",
                                "captcha_submit_label": "string",
                                "captcha_title": "string"
                              }
                            ]
                          ],
                          "failure_threshold": "number",
                          "failure_threshold_expiration_in_seconds": "number",
                          "interaction_threshold": "number",
                          "is_enabled": "bool",
                          "is_nat_enabled": "bool",
                          "recording_period_in_seconds": "number",
                          "set_http_header": [
                            "list",
                            [
                              "object",
                              {
                                "name": "string",
                                "value": "string"
                              }
                            ]
                          ]
                        }
                      ]
                    ],
                    "js_challenge": [
                      "list",
                      [
                        "object",
                        {
                          "action": "string",
                          "action_expiration_in_seconds": "number",
                          "are_redirects_challenged": "bool",
                          "challenge_settings": [
                            "list",
                            [
                              "object",
                              {
                                "block_action": "string",
                                "block_error_page_code": "string",
                                "block_error_page_description": "string",
                                "block_error_page_message": "string",
                                "block_response_code": "number",
                                "captcha_footer": "string",
                                "captcha_header": "string",
                                "captcha_submit_label": "string",
                                "captcha_title": "string"
                              }
                            ]
                          ],
                          "criteria": [
                            "list",
                            [
                              "object",
                              {
                                "condition": "string",
                                "is_case_sensitive": "bool",
                                "value": "string"
                              }
                            ]
                          ],
                          "failure_threshold": "number",
                          "is_enabled": "bool",
                          "is_nat_enabled": "bool",
                          "set_http_header": [
                            "list",
                            [
                              "object",
                              {
                                "name": "string",
                                "value": "string"
                              }
                            ]
                          ]
                        }
                      ]
                    ],
                    "origin": "string",
                    "origin_groups": [
                      "list",
                      "string"
                    ],
                    "protection_settings": [
                      "list",
                      [
                        "object",
                        {
                          "allowed_http_methods": [
                            "list",
                            "string"
                          ],
                          "block_action": "string",
                          "block_error_page_code": "string",
                          "block_error_page_description": "string",
                          "block_error_page_message": "string",
                          "block_response_code": "number",
                          "is_response_inspected": "bool",
                          "max_argument_count": "number",
                          "max_name_length_per_argument": "number",
                          "max_response_size_in_ki_b": "number",
                          "max_total_name_length_of_arguments": "number",
                          "media_types": [
                            "list",
                            "string"
                          ],
                          "recommendations_period_in_days": "number"
                        }
                      ]
                    ],
                    "whitelists": [
                      "list",
                      [
                        "object",
                        {
                          "address_lists": [
                            "list",
                            "string"
                          ],
                          "addresses": [
                            "list",
                            "string"
                          ],
                          "name": "string"
                        }
                      ]
                    ]
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
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

export interface DataOciWaasWaasPoliciesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayNames?: string[];
  readonly ids?: string[];
  readonly states?: string[];
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  /** filter block */
  readonly filter?: DataOciWaasWaasPoliciesFilter[];
}
export class DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup extends ComplexComputedList {

  // origin - computed: true, optional: false, required: true
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesOriginGroups extends ComplexComputedList {

  // label - computed: true, optional: false, required: true
  public get label() {
    return this.getStringAttribute('label');
  }

  // origin_group - computed: true, optional: false, required: true
  public get originGroup() {
    return 'not implemented' as any;
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesOrigins extends ComplexComputedList {

  // custom_headers - computed: true, optional: false, required: true
  public get customHeaders() {
    return 'not implemented' as any;
  }

  // http_port - computed: true, optional: false, required: true
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: true
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // label - computed: true, optional: false, required: true
  public get label() {
    return this.getStringAttribute('label');
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks extends ComplexComputedList {

  // expected_response_code_group - computed: true, optional: false, required: true
  public get expectedResponseCodeGroup() {
    return this.getListAttribute('expected_response_code_group');
  }

  // expected_response_text - computed: true, optional: false, required: true
  public get expectedResponseText() {
    return this.getStringAttribute('expected_response_text');
  }

  // headers - computed: true, optional: false, required: true
  public get headers() {
    return 'not implemented' as any;
  }

  // healthy_threshold - computed: true, optional: false, required: true
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval_in_seconds - computed: true, optional: false, required: true
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_response_text_check_enabled - computed: true, optional: false, required: true
  public get isResponseTextCheckEnabled() {
    return this.getBooleanAttribute('is_response_text_check_enabled');
  }

  // method - computed: true, optional: false, required: true
  public get method() {
    return this.getStringAttribute('method');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // timeout_in_seconds - computed: true, optional: false, required: true
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // unhealthy_threshold - computed: true, optional: false, required: true
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod extends ComplexComputedList {

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // expiration_time_in_seconds - computed: true, optional: false, required: true
  public get expirationTimeInSeconds() {
    return this.getNumberAttribute('expiration_time_in_seconds');
  }

  // method - computed: true, optional: false, required: true
  public get method() {
    return this.getStringAttribute('method');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig extends ComplexComputedList {

  // certificate_id - computed: true, optional: false, required: true
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // cipher_group - computed: true, optional: false, required: true
  public get cipherGroup() {
    return this.getStringAttribute('cipher_group');
  }

  // client_address_header - computed: true, optional: false, required: true
  public get clientAddressHeader() {
    return this.getStringAttribute('client_address_header');
  }

  // health_checks - computed: true, optional: false, required: true
  public get healthChecks() {
    return 'not implemented' as any;
  }

  // is_behind_cdn - computed: true, optional: false, required: true
  public get isBehindCdn() {
    return this.getBooleanAttribute('is_behind_cdn');
  }

  // is_cache_control_respected - computed: true, optional: false, required: true
  public get isCacheControlRespected() {
    return this.getBooleanAttribute('is_cache_control_respected');
  }

  // is_https_enabled - computed: true, optional: false, required: true
  public get isHttpsEnabled() {
    return this.getBooleanAttribute('is_https_enabled');
  }

  // is_https_forced - computed: true, optional: false, required: true
  public get isHttpsForced() {
    return this.getBooleanAttribute('is_https_forced');
  }

  // is_origin_compression_enabled - computed: true, optional: false, required: true
  public get isOriginCompressionEnabled() {
    return this.getBooleanAttribute('is_origin_compression_enabled');
  }

  // is_response_buffering_enabled - computed: true, optional: false, required: true
  public get isResponseBufferingEnabled() {
    return this.getBooleanAttribute('is_response_buffering_enabled');
  }

  // is_sni_enabled - computed: true, optional: false, required: true
  public get isSniEnabled() {
    return this.getBooleanAttribute('is_sni_enabled');
  }

  // load_balancing_method - computed: true, optional: false, required: true
  public get loadBalancingMethod() {
    return 'not implemented' as any;
  }

  // tls_protocols - computed: true, optional: false, required: true
  public get tlsProtocols() {
    return this.getListAttribute('tls_protocols');
  }

  // websocket_path_prefixes - computed: true, optional: false, required: true
  public get websocketPathPrefixes() {
    return this.getListAttribute('websocket_path_prefixes');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria extends ComplexComputedList {

  // condition - computed: true, optional: false, required: true
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // is_case_sensitive - computed: true, optional: false, required: true
  public get isCaseSensitive() {
    return this.getBooleanAttribute('is_case_sensitive');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // header - computed: true, optional: false, required: true
  public get header() {
    return this.getStringAttribute('header');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // block_action - computed: true, optional: false, required: true
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: true
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: true
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: true
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: true
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // bypass_challenges - computed: true, optional: false, required: true
  public get bypassChallenges() {
    return this.getListAttribute('bypass_challenges');
  }

  // captcha_footer - computed: true, optional: false, required: true
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: true
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: true
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: true
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }

  // criteria - computed: true, optional: false, required: true
  public get criteria() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // redirect_response_code - computed: true, optional: false, required: true
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }

  // redirect_url - computed: true, optional: false, required: true
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // response_header_manipulation - computed: true, optional: false, required: true
  public get responseHeaderManipulation() {
    return 'not implemented' as any;
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting extends ComplexComputedList {

  // allowed_rate_per_address - computed: true, optional: false, required: true
  public get allowedRatePerAddress() {
    return this.getNumberAttribute('allowed_rate_per_address');
  }

  // block_response_code - computed: true, optional: false, required: true
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // max_delayed_count_per_address - computed: true, optional: false, required: true
  public get maxDelayedCountPerAddress() {
    return this.getNumberAttribute('max_delayed_count_per_address');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria extends ComplexComputedList {

  // condition - computed: true, optional: false, required: true
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // caching_duration - computed: true, optional: false, required: true
  public get cachingDuration() {
    return this.getStringAttribute('caching_duration');
  }

  // client_caching_duration - computed: true, optional: false, required: true
  public get clientCachingDuration() {
    return this.getStringAttribute('client_caching_duration');
  }

  // criteria - computed: true, optional: false, required: true
  public get criteria() {
    return 'not implemented' as any;
  }

  // is_client_caching_enabled - computed: true, optional: false, required: true
  public get isClientCachingEnabled() {
    return this.getBooleanAttribute('is_client_caching_enabled');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas extends ComplexComputedList {

  // failure_message - computed: true, optional: false, required: true
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
  }

  // footer_text - computed: true, optional: false, required: true
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }

  // header_text - computed: true, optional: false, required: true
  public get headerText() {
    return this.getStringAttribute('header_text');
  }

  // session_expiration_in_seconds - computed: true, optional: false, required: true
  public get sessionExpirationInSeconds() {
    return this.getNumberAttribute('session_expiration_in_seconds');
  }

  // submit_label - computed: true, optional: false, required: true
  public get submitLabel() {
    return this.getStringAttribute('submit_label');
  }

  // title - computed: true, optional: false, required: true
  public get title() {
    return this.getStringAttribute('title');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions extends ComplexComputedList {

  // exclusions - computed: true, optional: false, required: true
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // exclusions - computed: true, optional: false, required: true
  public get exclusions() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings extends ComplexComputedList {

  // block_action - computed: true, optional: false, required: true
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: true
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: true
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: true
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: true
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // captcha_footer - computed: true, optional: false, required: true
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: true
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: true
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: true
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_expiration_in_seconds - computed: true, optional: false, required: true
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }

  // challenge_settings - computed: true, optional: false, required: true
  public get challengeSettings() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // failure_threshold_expiration_in_seconds - computed: true, optional: false, required: true
  public get failureThresholdExpirationInSeconds() {
    return this.getNumberAttribute('failure_threshold_expiration_in_seconds');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // max_address_count - computed: true, optional: false, required: true
  public get maxAddressCount() {
    return this.getNumberAttribute('max_address_count');
  }

  // max_address_count_expiration_in_seconds - computed: true, optional: false, required: true
  public get maxAddressCountExpirationInSeconds() {
    return this.getNumberAttribute('max_address_count_expiration_in_seconds');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings extends ComplexComputedList {

  // block_action - computed: true, optional: false, required: true
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: true
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: true
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: true
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: true
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // captcha_footer - computed: true, optional: false, required: true
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: true
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: true
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: true
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_expiration_in_seconds - computed: true, optional: false, required: true
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }

  // challenge_settings - computed: true, optional: false, required: true
  public get challengeSettings() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // failure_threshold_expiration_in_seconds - computed: true, optional: false, required: true
  public get failureThresholdExpirationInSeconds() {
    return this.getNumberAttribute('failure_threshold_expiration_in_seconds');
  }

  // interaction_threshold - computed: true, optional: false, required: true
  public get interactionThreshold() {
    return this.getNumberAttribute('interaction_threshold');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_nat_enabled - computed: true, optional: false, required: true
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }

  // recording_period_in_seconds - computed: true, optional: false, required: true
  public get recordingPeriodInSeconds() {
    return this.getNumberAttribute('recording_period_in_seconds');
  }

  // set_http_header - computed: true, optional: false, required: true
  public get setHttpHeader() {
    return 'not implemented' as any;
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings extends ComplexComputedList {

  // block_action - computed: true, optional: false, required: true
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: true
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: true
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: true
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: true
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // captcha_footer - computed: true, optional: false, required: true
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: true
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: true
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: true
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria extends ComplexComputedList {

  // condition - computed: true, optional: false, required: true
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // is_case_sensitive - computed: true, optional: false, required: true
  public get isCaseSensitive() {
    return this.getBooleanAttribute('is_case_sensitive');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_expiration_in_seconds - computed: true, optional: false, required: true
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }

  // are_redirects_challenged - computed: true, optional: false, required: true
  public get areRedirectsChallenged() {
    return this.getBooleanAttribute('are_redirects_challenged');
  }

  // challenge_settings - computed: true, optional: false, required: true
  public get challengeSettings() {
    return 'not implemented' as any;
  }

  // criteria - computed: true, optional: false, required: true
  public get criteria() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_nat_enabled - computed: true, optional: false, required: true
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }

  // set_http_header - computed: true, optional: false, required: true
  public get setHttpHeader() {
    return 'not implemented' as any;
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings extends ComplexComputedList {

  // allowed_http_methods - computed: true, optional: false, required: true
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }

  // block_action - computed: true, optional: false, required: true
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: true
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: true
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: true
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: true
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // is_response_inspected - computed: true, optional: false, required: true
  public get isResponseInspected() {
    return this.getBooleanAttribute('is_response_inspected');
  }

  // max_argument_count - computed: true, optional: false, required: true
  public get maxArgumentCount() {
    return this.getNumberAttribute('max_argument_count');
  }

  // max_name_length_per_argument - computed: true, optional: false, required: true
  public get maxNameLengthPerArgument() {
    return this.getNumberAttribute('max_name_length_per_argument');
  }

  // max_response_size_in_ki_b - computed: true, optional: false, required: true
  public get maxResponseSizeInKiB() {
    return this.getNumberAttribute('max_response_size_in_ki_b');
  }

  // max_total_name_length_of_arguments - computed: true, optional: false, required: true
  public get maxTotalNameLengthOfArguments() {
    return this.getNumberAttribute('max_total_name_length_of_arguments');
  }

  // media_types - computed: true, optional: false, required: true
  public get mediaTypes() {
    return this.getListAttribute('media_types');
  }

  // recommendations_period_in_days - computed: true, optional: false, required: true
  public get recommendationsPeriodInDays() {
    return this.getNumberAttribute('recommendations_period_in_days');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists extends ComplexComputedList {

  // address_lists - computed: true, optional: false, required: true
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }

  // addresses - computed: true, optional: false, required: true
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciWaasWaasPoliciesWaasPoliciesWafConfig extends ComplexComputedList {

  // access_rules - computed: true, optional: false, required: true
  public get accessRules() {
    return 'not implemented' as any;
  }

  // address_rate_limiting - computed: true, optional: false, required: true
  public get addressRateLimiting() {
    return 'not implemented' as any;
  }

  // caching_rules - computed: true, optional: false, required: true
  public get cachingRules() {
    return 'not implemented' as any;
  }

  // captchas - computed: true, optional: false, required: true
  public get captchas() {
    return 'not implemented' as any;
  }

  // custom_protection_rules - computed: true, optional: false, required: true
  public get customProtectionRules() {
    return 'not implemented' as any;
  }

  // device_fingerprint_challenge - computed: true, optional: false, required: true
  public get deviceFingerprintChallenge() {
    return 'not implemented' as any;
  }

  // human_interaction_challenge - computed: true, optional: false, required: true
  public get humanInteractionChallenge() {
    return 'not implemented' as any;
  }

  // js_challenge - computed: true, optional: false, required: true
  public get jsChallenge() {
    return 'not implemented' as any;
  }

  // origin - computed: true, optional: false, required: true
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // origin_groups - computed: true, optional: false, required: true
  public get originGroups() {
    return this.getListAttribute('origin_groups');
  }

  // protection_settings - computed: true, optional: false, required: true
  public get protectionSettings() {
    return 'not implemented' as any;
  }

  // whitelists - computed: true, optional: false, required: true
  public get whitelists() {
    return 'not implemented' as any;
  }
}
export class DataOciWaasWaasPoliciesWaasPolicies extends ComplexComputedList {

  // additional_domains - computed: true, optional: false, required: true
  public get additionalDomains() {
    return this.getListAttribute('additional_domains');
  }

  // cname - computed: true, optional: false, required: true
  public get cname() {
    return this.getStringAttribute('cname');
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

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin_groups - computed: true, optional: false, required: true
  public get originGroups() {
    return 'not implemented' as any;
  }

  // origins - computed: true, optional: false, required: true
  public get origins() {
    return 'not implemented' as any;
  }

  // policy_config - computed: true, optional: false, required: true
  public get policyConfig() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // waf_config - computed: true, optional: false, required: true
  public get wafConfig() {
    return 'not implemented' as any;
  }
}
export interface DataOciWaasWaasPoliciesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciWaasWaasPolicies extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasWaasPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_waas_policies',
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

  // waas_policies - computed: true, optional: false, required: true
  public waasPolicies(index: string) {
    return new DataOciWaasWaasPoliciesWaasPolicies(this, 'waas_policies', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciWaasWaasPoliciesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciWaasWaasPoliciesFilter[] | undefined) {
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
